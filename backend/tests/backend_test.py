"""Backend API tests for portfolio contact form.

Covers:
- GET /api/ hello world
- POST /api/contact validations and success
- GET /api/contact listing + persistence + ordering
- POST/GET /api/status regression
"""
import os
import time
import uuid

import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read frontend .env (tests should still use the public URL)
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip()
                    break

assert BASE_URL, "REACT_APP_BACKEND_URL must be defined"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root_hello_world(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("message") == "Hello World"


# ---------- Status endpoints (regression) ----------
class TestStatus:
    def test_status_post_and_get(self, api_client):
        client_name = f"TEST_client_{uuid.uuid4().hex[:8]}"
        r = api_client.post(f"{API}/status", json={"client_name": client_name})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["client_name"] == client_name
        assert "id" in data and isinstance(data["id"], str)
        assert "timestamp" in data

        r2 = api_client.get(f"{API}/status")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        assert any(x.get("client_name") == client_name for x in items)


# ---------- Contact endpoint ----------
class TestContact:
    def test_create_contact_success(self, api_client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST User {unique}",
            "email": f"test_{unique}@example.com",
            "subject": f"TEST subject {unique}",
            "message": f"TEST message {unique}, hello",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        # echoed fields
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        # generated fields
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data and isinstance(data["created_at"], str)
        # email_sent expected True now that RESEND_API_KEY is configured
        assert data.get("email_sent") is True, f"Expected email_sent=True, got {data.get('email_sent')}"

        # Persist in the module namespace via pytest for the list test
        TestContact.last_created = data

    def test_list_contacts_contains_created(self, api_client):
        # depends on previous test
        assert getattr(TestContact, "last_created", None), "Prior create test must run first"
        created = TestContact.last_created
        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        ids = [x.get("id") for x in items]
        assert created["id"] in ids

    def test_list_newest_first(self, api_client):
        # Create two contacts back to back and check ordering (desc by created_at)
        p1 = {
            "name": "TEST Ord One",
            "email": f"ord1_{uuid.uuid4().hex[:6]}@example.com",
            "subject": "TEST ord 1",
            "message": "first",
        }
        r1 = api_client.post(f"{API}/contact", json=p1)
        assert r1.status_code == 200
        time.sleep(1.1)  # ensure distinct created_at timestamps
        p2 = {
            "name": "TEST Ord Two",
            "email": f"ord2_{uuid.uuid4().hex[:6]}@example.com",
            "subject": "TEST ord 2",
            "message": "second",
        }
        r2 = api_client.post(f"{API}/contact", json=p2)
        assert r2.status_code == 200

        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        # find indexes of the two ids we created
        ids = [x["id"] for x in items]
        id1 = r1.json()["id"]
        id2 = r2.json()["id"]
        assert id1 in ids and id2 in ids
        # id2 was created after id1 → should appear earlier (smaller index) if newest-first
        assert ids.index(id2) < ids.index(id1), (
            f"Expected newest first; id2 idx={ids.index(id2)}, id1 idx={ids.index(id1)}"
        )

    def test_create_contact_invalid_email_returns_422(self, api_client):
        payload = {
            "name": "TEST Bad Email",
            "email": "not-an-email",
            "subject": "TEST",
            "message": "hello",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_name_returns_422(self, api_client):
        payload = {
            "email": "test@example.com",
            "subject": "TEST",
            "message": "hello",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_message_returns_422(self, api_client):
        payload = {
            "name": "TEST",
            "email": "test@example.com",
            "subject": "TEST",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_empty_name_returns_422(self, api_client):
        payload = {
            "name": "",
            "email": "test@example.com",
            "subject": "TEST",
            "message": "hello",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_subject_optional_ok(self, api_client):
        # subject is optional and defaults to ""
        payload = {
            "name": f"TEST NoSubject",
            "email": f"nosub_{uuid.uuid4().hex[:6]}@example.com",
            "message": "hello without subject",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["subject"] == ""

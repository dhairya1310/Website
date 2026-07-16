from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
import os

OUT = "/app/frontend/public/Dhairya_Shah_Resume.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

TEAL = HexColor("#00c2cc")
DARK = HexColor("#111114")
GREY = HexColor("#555560")

c = canvas.Canvas(OUT, pagesize=LETTER)
W, H = LETTER
x = 0.9 * inch
y = H - 0.9 * inch

c.setFillColor(DARK)
c.setFont("Helvetica-Bold", 26)
c.drawString(x, y, "Dhairya Shah")
y -= 22
c.setFillColor(TEAL)
c.setFont("Helvetica-Bold", 11)
c.drawString(x, y, "ANALYST  —  DATA, FINANCE & BUSINESS")
y -= 16
c.setFillColor(GREY)
c.setFont("Helvetica", 10)
c.drawString(x, y, "United States  |  +1 551-362-9992  |  dshah5744@gmail.com  |  LinkedIn / GitHub / Tableau")
y -= 24


def heading(t):
    global y
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x, y, t.upper())
    y -= 4
    c.setStrokeColor(TEAL)
    c.setLineWidth(0.8)
    c.line(x, y, W - 0.9 * inch, y)
    y -= 16


def line(t, bold=False, size=10, indent=0):
    global y
    c.setFillColor(DARK if bold else GREY)
    c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
    c.drawString(x + indent, y, t)
    y -= 14


heading("Summary")
line("Data / business analyst with 3+ years turning messy data into decisions. Python, SQL, Tableau,", size=10)
line("forecasting and experimentation across e-commerce, consulting and startups.", size=10)
y -= 8

heading("Experience")
line("Data Operations Analyst — Axion24 AI Technologies", bold=True)
line("May 2025 – Present", size=9)
line("• Own data pipelines, QA and reporting for AI operations workflows.", indent=6)
y -= 6
line("Data Analyst Intern — Accenture", bold=True)
line("Jan 2024 – Jun 2024", size=9)
line("• Category analytics and experimentation that lifted category revenue by 8%.", indent=6)
y -= 6
line("Data Analyst — Expify", bold=True)
line("Jun 2022 – Oct 2023", size=9)
line("• Cut weekly reporting from 40 to 8 hours; drove +15% revenue per session.", indent=6)
y -= 8

heading("Projects & Research")
line("Global Luxury Resale Market — 25K+ listings, 10 Tableau dashboards.", indent=6)
line("Forecasting Micro/Macro Economic Indicators — LSTM + ML, ~95% R².", indent=6)
line("Published: Hinweis Intl Conference ASIT 2024.", indent=6)
y -= 8

heading("Skills")
line("Python, SQL, R, Excel  |  A/B testing, forecasting, segmentation, KPI design, ETL", indent=6)
line("Tableau, Power BI, Looker, Snowflake, AWS, Azure, Databricks, Git", indent=6)
y -= 8

heading("Education")
line("M.S. Data Science — Stevens Institute of Technology (GPA 3.73, May 2026)", indent=6)
line("B.Tech Information Technology — K.J. Somaiya (GPA 3.62, Distinction)", indent=6)
y -= 8

heading("Certifications")
line("Databricks Certified Data Analyst Associate • Bloomberg Market Concepts", indent=6)
line("Google Cloud Big Data & ML • IBM Data Visualization • UCSD Big Data", indent=6)
line("EDA (UIUC) • Time Series (DeepLearning.AI)", indent=6)

c.setFillColor(GREY)
c.setFont("Helvetica-Oblique", 8)
c.drawString(x, 0.6 * inch, "Placeholder resume — replace /app/frontend/public/Dhairya_Shah_Resume.pdf with your real PDF.")

c.showPage()
c.save()
print("wrote", OUT)

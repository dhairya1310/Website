export const PROFILE = {
  name: "Dhairya Shah",
  first: "Dhairya",
  last: "Shah",
  headline: "Turning Data Into Decisions",
  positioning:
    "Built for the gap between a dataset and a decision.",
  location: "United States",
  email: "dshah5744@gmail.com",
  phone: "+1 551-362-9992",
  resume: "/Dhairya_Shah_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/dhairya-shah-b00b111b6/",
    github: "https://github.com/dhairya1310",
    tableau: "https://public.tableau.com/app/profile/dhairya1310",
  },
};

export const STATS = [
  { value: "3+", label: "Years in analytics" },
  { value: "25K+", label: "Listings analyzed" },
  { value: "95%", label: "Forecast R²" },
  { value: "40→8", label: "Hrs/wk reporting cut" },
];

export const ABOUT = [
  {
    no: "01",
    title: "The Problem Space",
    body: "I like problems that live somewhere between raw data and the decision someone actually has to make. Give me a spreadsheet of transactions, a government database migrating off a legacy server, or twelve months of stock prices, and I will find the pattern worth acting on.",
  },
  {
    no: "02",
    title: "The Path",
    body: "My path started in Mumbai, where I was analyzing luxury resale prices and building forecasting models while still in college, and it has taken me through retail analytics at Accenture, product experimentation at a fast moving startup, and now government scale data infrastructure work with Axion24. Along the way I picked up a master's in Data Science from Stevens Institute of Technology, though most of what I know came from messy real datasets that refused to behave.",
  },
  {
    no: "03",
    title: "Numbers & Narrative",
    body: "I am drawn to work that sits at the intersection of numbers and narrative. A model is only useful if someone can explain it in a room full of stakeholders, so I care as much about the SQL query as I do about the slide that follows it.",
  },
  {
    no: "04",
    title: "Off the Clock",
    body: "Outside of dashboards and forecasts, I am usually reading about markets, testing a new tool I probably do not need yet, or trying to make a complicated idea sound simple.",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Operations Analyst",
    company: "Axion24 AI Technologies",
    period: "May 2025 — Present",
    location: "Remote",
    points: [
      "Migrated government client data from legacy servers to AWS and Azure, validating field integrity after every cutover across two projects.",
      "Built the admin analytics layer tracking page visits, downloads, and device usage, giving the board visibility into citizen and industry engagement.",
      "Supported auto-ingestion pipelines that kept new circulars flowing into public tools automatically, holding a 99% uptime SLA.",
    ],
    metric: "Live",
  },
  {
    role: "Data Analyst Intern",
    company: "Accenture",
    period: "Jan 2024 — Jun 2024",
    location: "Mumbai, India",
    points: [
      "Ran category analytics and A/B experiments for a retail client across product categories and store regions.",
      "Built Power BI dashboards on category sales and promo lift, adopted by merchandising leads for weekly markdown decisions.",
      "Delivered pricing and promo recommendations that lifted category revenue by 8% the following quarter.",
    ],
    metric: "+8% category revenue",
  },
  {
    role: "Data Analyst",
    company: "Expify",
    period: "Jun 2022 — Oct 2023",
    location: "Mumbai, India",
    points: [
      "Automated the weekly reporting pipeline across Postgres, HubSpot, Google Analytics, and Excel, cutting manual prep from 40 hours to under 8.",
      "Led A/B tests on pricing and checkout flow, owning rollout decisions that lifted revenue per session by 15%.",
      "Built 12 Tableau dashboards on customer lifecycle and segmentation used in weekly business reviews.",
    ],
    metric: "40→8 hrs/wk · +15% rev/session",
  },
];

export const PROJECTS = [
  {
    tag: "Market Analytics",
    title: "Analysis of the Global Luxury Resale Market",
    points: [
      "Analyzed 25K+ resale listings to see how top brands hold their value over time.",
      "Broke down pricing power, brand velocity and depreciation across the global market.",
      "Turned it all into 10 interactive Tableau dashboards anyone could explore.",
    ],
    stack: ["Python", "SQL", "Tableau"],
    metric: "25K+ listings · 10 dashboards",
    image: "https://images.unsplash.com/photo-1709990740117-0eb9358fbd24",
    link: "https://github.com/dhairya1310/Analyzing-the-Global-Luxury-Resale-Market-Data-Analysis-Visualization/blob/main/README.md",
  },
  {
    tag: "Research · Published",
    title: "Forecasting Micro/Macro Economic Indicators",
    points: [
      "Built an LSTM and classical ML ensemble to forecast key economic indicators.",
      "Hit around 95% R2 on data the models had never seen before.",
      "Published the work at the Hinweis International Conference ASIT 2024.",
    ],
    stack: ["LSTM", "Python", "Time Series"],
    metric: "~95% R² · ASIT 2024",
    image: "https://images.unsplash.com/photo-1689732888407-310424e3a372",
    link: "https://github.com/dhairya1310/Forecasting-Micro-and-Macro-Economic-Indicators-with-ML",
  },
  {
    tag: "Reinforcement Learning",
    title: "Dynamic Asset Allocation with Deep RL",
    points: [
      "Trained DQN, A2C and PPO agents to allocate across the S&P 500, Dow Jones and Hang Seng instead of using fixed rules.",
      "Used 30+ years of daily market and macro data, then tested on unseen 2023 to 2024 conditions.",
      "The best model (A2C) grew $100K into $129,914 with a 1.88 Sharpe ratio and under 10% drawdown.",
    ],
    stack: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Streamlit"],
    metric: "1.88 Sharpe · +29.9% return",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    link: "https://github.com/dhairya1310/portfolio-optimization-RL",
  },
  {
    tag: "Anomaly Detection",
    title: "Airbnb Anomaly Detection",
    points: [
      "Built an unsupervised pipeline to flag odd pricing and review patterns in Airbnb listings.",
      "Cleaned and merged listings, calendar and review data, then ran Isolation Forest and DBSCAN.",
      "Surfaced the kind of outliers that matter for platform trust and data quality at scale.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    metric: "Isolation Forest · DBSCAN",
    image: "https://images.unsplash.com/photo-1704244003064-6d4e55ddd733",
    link: "https://github.com/dhairya1310/Airbnb-Anomaly-Detection",
  },
];

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "SQL", "R", "Excel"],
  },
  {
    group: "Analytics",
    items: ["A/B Testing", "Forecasting", "Segmentation", "KPI Design", "ETL"],
  },
  {
    group: "Software",
    items: ["Snowflake", "AWS", "Azure", "Databricks", "Git"],
  },
  {
    group: "BI / Viz",
    items: ["Tableau", "Power BI", "Looker", "Excel Dashboards"],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. Data Science",
    school: "Stevens Institute of Technology",
    period: "May 2026",
    gpa: "GPA 3.73",
  },
  {
    degree: "B.Tech, Information Technology",
    school: "K.J. Somaiya College of Engineering",
    period: "Graduated with Distinction",
    gpa: "GPA 3.62",
  },
];

export const CERTIFICATIONS = [
  { name: "Databricks Certified Data Analyst Associate", issuer: "Databricks", link: "https://credentials.databricks.com/b0f5c872-2c4c-4dea-94bc-8d69042a7c83#acc.g6kWbe3d" },
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg", link: "https://portal.bloombergforeducation.com/certificates/HKKNYSc529ovfuAdsgdBMi4Q" },
  { name: "Big Data & Machine Learning", issuer: "Google Cloud", link: "https://www.coursera.org/account/accomplishments/verify/F9S7VZHUM5T6" },
  { name: "Data Visualization", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/verify/6YAUBGQN5BQV" },
  { name: "Big Data", issuer: "UC San Diego", link: "https://www.coursera.org/account/accomplishments/verify/73Q54NV9LG9B" },
  { name: "Exploratory Data Analysis", issuer: "UIUC", link: "https://www.coursera.org/account/accomplishments/verify/TLV7BY7Q79YB" },
  { name: "Sequences, Time Series & Prediction", issuer: "DeepLearning.AI", link: "https://www.coursera.org/account/accomplishments/verify/YQZ4LZC6A8FC" },
  { name: "Project Management", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/verify/4CZ7LEW4GVFC" },
];

export const PROFILE = {
  name: "Dhairya Shah",
  first: "Dhairya",
  last: "Shah",
  headline: "Data Analyst",
  positioning:
    "Built for the gap between a dataset and a decision.",
  location: "New York, NY",
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
    title: "How I Think",
    body: "I do not trust a number until I know where it came from and what it is measured against. Most bad decisions I have seen were not caused by bad data, they were caused by good data read the wrong way. That is the gap I try to close.",
  },
  {
    no: "02",
    title: "What I Bring",
    body: "I move comfortably between the technical side and the business side. I can build the model or the dashboard, and I can also explain in plain terms what it means for revenue, risk, or a decision someone has to make this week.",
  },
  {
    no: "03",
    title: "How I Work",
    body: "I ask why before I ask what. If a metric is trending the wrong way, I want the reason, not just the alert. That habit has made me faster at finding real problems instead of chasing noise.",
  },
  {
    no: "04",
    title: "What I am looking for",
    body: " I want to work somewhere data is not just reported but used, where a good analysis changes what happens next. If that sounds like your team, I am one message away.don",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Operations Analyst",
    company: "Axion24 AI Technologies",
    period: "May 2025 — Aug 2025",
    location: "Mumbai, India",
    points: [
      "Validated integrity across close to 300K records in two government migrations to AWS and Azure, mapping legacy schemas to new models under business and technical rules.",
      "Processed close to 12K circulars a month across three languages, applying governance rules to catch metadata errors and duplicates, cutting manual review by around 30%.",
      "Built the admin analytics layer tracking usage and document activity, giving leadership visibility into data quality across the platform.",
    ],

  },
  {
    role: "Data Analyst",
    company: "Accenture",
    period: "Jan 2024 — Jun 2024",
    location: "Mumbai, India",
    points: [
      "Built statistical models in Python, SQL, and SAS for sales reporting and short-term revenue forecasts across categories and regions.",
      "Built Power BI dashboards on category sales and promo lift, used by merchandising leads for weekly markdown decisions.",
      "Ran scenario analysis on pricing changes, delivering recommendations that lifted category revenue 8%.",
    ],
    
  },
  {
    role: "Data Analyst",
    company: "Expify",
    period: "Jun 2022 — Oct 2023",
    location: "Mumbai, India",
    points: [
      "Led A/B tests on pricing and checkout flow, owning rollout decisions that lifted revenue per session 15%.",
      "Automated the weekly reporting pipeline across Postgres, HubSpot, and Google Analytics, cutting manual prep from 40 hours to under 8..",
      "Built 12 Tableau dashboards on customer lifecycle and segmentation, used in weekly business reviews.",
    ],
    
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
    items: ["Python", "SQL", "R", "Excel", "C++", "Jupyter"],
  },
  {
    group: "Analytics",
    items: ["A/B Testing", "Segmentation", "Hypothesis Testing", "Anomaly & Pattern Detection", "Statistical Modeling", "Fraud & Risk Analysis"],
  },
  {
    group: "Software",
    items: ["Snowflake", "AWS", "Azure", "Databricks", "Git", "ETL", "SAS"],
  },
  {
    group: "BI / Viz",
    items: ["Tableau", "Power BI", "Looker", "Excel Dashboards"],
  },
  {
    group: "ML/Modeling",
    items: ["PyTorch", "Stable-Baselines3", "Gymnasium", "Scikit-learn", "Time Series Forecasting", "Logistic Regression"],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. Data Science",
    school: "Stevens Institute of Technology",
    period: "Graduated May 2026",
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

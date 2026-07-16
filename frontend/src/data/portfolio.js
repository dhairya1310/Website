export const PROFILE = {
  name: "Dhairya Shah",
  first: "Dhairya",
  last: "Shah",
  headline: "Analyst — data, finance & business",
  positioning:
    "Data should simplify decisions, not overwhelm them.",
  location: "United States",
  email: "dshah5744@gmail.com",
  phone: "+1 551-362-9992",
  resume: "/Dhairya_Shah_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/dhairya-shah",
    github: "https://github.com/dhairya-shah",
    tableau: "https://public.tableau.com/app/profile/dhairya.shah",
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
    title: "The Origin",
    body: "Raised in Mumbai, I grew up fascinated by patterns — cricket stats, markets, anything with numbers behind it. That curiosity became a discipline: asking what the data is really saying before anyone reacts to it.",
  },
  {
    no: "02",
    title: "The Craft",
    body: "At Accenture and Expify I learned analytics as a contact sport — shipping experiments, cutting reporting time, and defending recommendations in front of stakeholders who cared about revenue, not charts.",
  },
  {
    no: "03",
    title: "The Pivot",
    body: "I moved deeper into data operations at Axion24 AI Technologies, owning pipelines and quality for AI workflows — where a single bad row can quietly break a model.",
  },
  {
    no: "04",
    title: "The Edge",
    body: "Now finishing an M.S. in Data Science at Stevens Institute, I pair rigorous forecasting and ML with a business instinct for what actually matters. I want the analyst seat where insight becomes decision.",
  },
];

export const EXPERIENCE = [
  {
    role: "Data Operations Analyst",
    company: "Axion24 AI Technologies",
    period: "May 2025 — Present",
    location: "United States",
    points: [
      "Own end-to-end data pipelines, QA and reporting for AI operations workflows.",
      "Built monitoring that surfaces data-quality issues before they reach production models.",
      "Partner with engineering to standardize ingestion and reduce manual cleanup.",
    ],
    metric: "Live",
  },
  {
    role: "Data Analyst Intern",
    company: "Accenture",
    period: "Jan 2024 — Jun 2024",
    location: "India",
    points: [
      "Ran category analytics and A/B experiments for a retail client.",
      "Designed KPI dashboards adopted by category managers for weekly decisions.",
      "Turned experimentation insights into merchandising changes.",
    ],
    metric: "+8% category revenue",
  },
  {
    role: "Data Analyst",
    company: "Expify",
    period: "Jun 2022 — Oct 2023",
    location: "India",
    points: [
      "Automated the weekly reporting stack end-to-end with SQL + Python.",
      "Built segmentation and funnel analysis that informed product pricing.",
      "Owned the analytics roadmap as the first data hire at the startup.",
    ],
    metric: "40→8 hrs/wk · +15% rev/session",
  },
];

export const PROJECTS = [
  {
    tag: "Market Analytics",
    title: "Global Luxury Resale Market",
    desc: "Scraped and analyzed 25K+ listings to map pricing power, brand velocity and depreciation curves across the global resale market — packaged into 10 interactive Tableau dashboards.",
    stack: ["Python", "SQL", "Tableau"],
    metric: "25K+ listings · 10 dashboards",
    image: "https://images.unsplash.com/photo-1709990740117-0eb9358fbd24",
    link: "https://public.tableau.com/app/profile/dhairya.shah",
  },
  {
    tag: "Research · Published",
    title: "Forecasting Micro/Macro Economic Indicators",
    desc: "Built an LSTM + classical ML ensemble to forecast key economic indicators, reaching ~95% R². Published at the Hinweis International Conference ASIT 2024.",
    stack: ["LSTM", "Python", "Time Series"],
    metric: "~95% R² · ASIT 2024",
    image: "https://images.unsplash.com/photo-1689732888407-310424e3a372",
    link: "#",
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
    group: "Tools & Platforms",
    items: [
      "Tableau",
      "Power BI",
      "Looker",
      "Snowflake",
      "AWS",
      "Azure",
      "Databricks",
      "Git",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "M.S. Data Science",
    school: "Stevens Institute of Technology",
    period: "Expected May 2026",
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
  { name: "Databricks Certified Data Analyst Associate", issuer: "Databricks", link: "https://www.databricks.com/learn/certification" },
  { name: "Bloomberg Market Concepts", issuer: "Bloomberg", link: "https://portal.bloombergforeducation.com/certificates" },
  { name: "Big Data & Machine Learning", issuer: "Google Cloud", link: "https://www.cloudskillsboost.google/" },
  { name: "Data Visualization", issuer: "IBM", link: "https://www.credly.com/" },
  { name: "Big Data", issuer: "UC San Diego", link: "https://www.coursera.org/" },
  { name: "Exploratory Data Analysis", issuer: "UIUC", link: "https://www.coursera.org/" },
  { name: "Sequences, Time Series & Prediction", issuer: "DeepLearning.AI", link: "https://www.coursera.org/" },
];

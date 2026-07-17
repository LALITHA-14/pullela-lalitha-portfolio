export const profile = {
  name: 'Pullela Lalitha',
  initials: 'PL',
  title: 'Data Science Student & Data Engineering Enthusiast',
  location: 'Mummidivaram, Andhra Pradesh, India',
  tagline:
    'I build ETL pipelines, streaming systems, and analytics tools that turn raw data into decisions.',
  bio: [
    "I'm a Data Science student with hands-on experience in Python, SQL, and scalable data pipelines — covering ingestion, transformation, and analytics across Power BI and cloud platforms.",
    "My work centers on data engineering: building pipelines that are reliable, observable, and fast — whether that's a hot/cold storage architecture for time-series data or a scheduled Airflow workflow for e-commerce orders.",
    "I'm currently deepening my skills in streaming systems (Kafka, RabbitMQ) and cloud-native data platforms (Snowflake, GCP), with the goal of building real-world data infrastructure that scales.",
  ],
  email: 'eshwarilalithapullela@gmail.com',
  github: 'https://github.com/LALITHA-14',
  linkedin: 'https://www.linkedin.com/in/lalitha-pullela',
}

export const stages = ['Ingest', 'Transform', 'Store', 'Analyze']

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL'],
  },
  {
    category: 'Data Science & ML',
    items: ['Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Docker', 'Git', 'GitHub', 'Kafka', 'Snowflake', 'Google Cloud Platform'],
  },
  {
    category: 'Data, BI & Automation',
    items: ['Power BI', 'Excel', 'Power Automate', 'Power Apps', 'SharePoint'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Teamwork', 'Adaptability'],
  },
]

export const projects = [
  {
    title: 'EV Charging Analytics Data Pipeline',
    stage: 'Store',
    description:
      'A time-series ETL pipeline that ingests, transforms, and stores EV charging data using a hot and cold storage architecture for fast recent-data access and cheap long-term retention.',
    tech: ['Python', 'PostgreSQL', 'DuckDB', 'Parquet', 'Docker'],
    highlight:
      'Optimized storage and retrieval with PostgreSQL and Parquet, enabling scalable analytics and historical trend analysis.',
    github: 'https://github.com/LALITHA-14/ev-data-pipeline',
    demo: null,
  },
  {
    title: 'Scheduled ETL Pipeline for E-commerce Order Processing',
    stage: 'Transform',
    description:
      'An automated ETL pipeline that processes e-commerce order data end-to-end, from raw ingestion through transformation to a query-ready warehouse.',
    tech: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL', 'Docker'],
    highlight:
      'Designed scheduled Airflow workflows with task dependencies and error handling, running reliably inside Docker for reproducible processing.',
    github: 'https://github.com/LALITHA-14/ecommerce-etl-pipeline',
    demo: null,
  },
  {
    title: 'Real-Time Event Streaming Architecture Benchmark',
    stage: 'Ingest',
    description:
      'A side-by-side benchmark of real-time event streaming pipelines, comparing how two popular brokers exchange messages under load.',
    tech: ['Python', 'Apache Kafka', 'RabbitMQ', 'Docker'],
    highlight:
      'Benchmarked throughput and latency of Kafka and RabbitMQ under different workloads inside a containerized environment.',
    github: 'https://github.com/LALITHA-14/order-processing-benchmark',
    demo: null,
  },
]

export const education = [
  {
    degree: 'B.Tech in CSE — Data Science',
    school: 'Aditya College of Engineering and Technology',
    period: '2023 – 2027',
    detail: 'CGPA: 8.93',
  },
  {
    degree: 'Intermediate — MPC',
    school: 'Narayana Junior College',
    period: '2023',
    detail: 'Aggregate: 96.4%',
  },
  {
    degree: 'Secondary School',
    school: 'Narayana (EM) High School',
    period: '2021',
    detail: 'Aggregate: 100%',
  },
]

export const profiles = [
  { label: 'GitHub', handle: 'LALITHA-14', url: 'https://github.com/LALITHA-14' },
  { label: 'CodeChef', handle: 'lalithapullela', url: 'https://www.codechef.com/users/lalithapullela' },
  { label: 'GeeksforGeeks', handle: 'eshwarilali3t5g', url: 'https://www.geeksforgeeks.org/user/eshwarilali3t5g/' },
  { label: 'LeetCode', handle: 'eshwarilalithapullela', url: 'https://leetcode.com/eshwarilalithapullela' },
  { label: 'HackerRank', handle: 'eshwarilalithap1', url: 'https://www.hackerrank.com/eshwarilalithap1' },
]

export const languages = [
  { name: 'Telugu', level: 'Proficient' },
  { name: 'Hindi', level: 'Intermediate' },
  { name: 'English', level: 'Intermediate' },
]


// Quadrants 
// 0. DataOps/MLOps
// 1. Application Development
// 2. Data Science & AI
// 3. Data Engineering

// Rings
// 0. Adopt 
// 1. Trial 
// 2. Assess
// 3. Hold 

var radarData = [
    {'label': 'Azure Cloud', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Great Expectations', 'quadrant': 3, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Airbyte', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Airflow', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Alibaba Cloud', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Apache Spark', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Azure Data Factory', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'BigQuery', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Databricks', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'dbt', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'duckdb', 'quadrant': 3, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Delta Live Tables', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'FastAPI', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Prefect', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Snowflake', 'quadrant': 3, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'neo4J', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Superset', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Metabase', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'RabbitMQ', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'PostgresQL', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Delta Lake', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Pandas', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Plotly', 'quadrant': 2, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'InterpretML', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Pytest', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Pyomo + Ipopt', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Diffusers', 'quadrant': 2, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Transformers', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Tensorboard', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Xgboost', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Spark ML', 'quadrant': 2, 'ring': 3, 'moved': 1, 'active': true} ,
    {'label': 'Scipy', 'quadrant': 2, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'Shap', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'LightGBM', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'PyMC', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Bambi', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'UMAP', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Tableau', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'PowerBI', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'EBM', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'LLM', 'quadrant': 2, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'StableDiffusion', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Scrapy', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'DoWhy', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Selenium', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'AWS SageMaker', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Azure ML', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Vertex AI', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Azure DevOps', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Bitbucket', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Docker', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Jfrog', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Packer', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Grafana', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Prometheus', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Jira', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'kubernetes', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'ArgoCD', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Mkdocs', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'mlflow', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Golang (language)', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Sentinel', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Databricks feature store', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Poetry', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Terraform', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Helm', 'quadrant': 0, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'cdktf', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Snyk', 'quadrant': 0, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'Git', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Fast API', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'MongoDB', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'serverless', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Angular', 'quadrant': 1, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Nginx', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'D3.JS', 'quadrant': 1, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Typescript', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'React', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'NodeJS', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'RabbitMQ', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Nest.JS', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Vue.JS', 'quadrant': 1, 'ring': 1, 'moved': 1, 'active': true} ,
    {'label': 'Cosmos db', 'quadrant': 1, 'ring': 3, 'moved': 0.0, 'active': true} ,
    {'label': 'Firestore', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'MUI', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'zod', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'react-query', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'prisma', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'tRPC', 'quadrant': 1, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Nextjs', 'quadrant': 1, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'vite', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'vitest', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'zustand', 'quadrant': 1, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'tailwind', 'quadrant': 1, 'ring': 0, 'moved': 1, 'active': true} ,
    {'label': 'BigQuery ML', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Python', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'SQL', 'quadrant': 3, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'uv', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'DVC', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Weights & Biases', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'GitHub Actions', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'OpenTofu', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': true} ,
    {'label': 'Polars', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'PyTorch', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true} ,
    {'label': 'Vector Databases', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Dagster', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'Apache Iceberg', 'quadrant': 3, 'ring': 1, 'moved': 0.0, 'active': true} ,
    {'label': 'MotherDuck', 'quadrant': 3, 'ring': 2, 'moved': 0.0, 'active': true} ,
];
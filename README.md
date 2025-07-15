# Hello CI/CD Learning Project

A simple "Hello World" web application designed to teach CI/CD concepts using:
- **Docker** for containerization
- **GitHub Actions** for CI/CD
- **Hetzner VPS** for hosting
- **Coolify** for deployment management
- **Basic monitoring** setup

## Project Structure
```
hello-cicd-learning/
├── backend/           # Simple Node.js/Express API
├── frontend/          # Simple HTML/CSS/JavaScript
├── .github/workflows/ # CI/CD pipelines
├── docker-compose.yml # Local development
├── monitoring/        # Basic monitoring setup
└── docs/             # Learning documentation
```

## Learning Objectives

After completing this project, you'll understand:

1. **Containerization**: How to create Docker containers
2. **CI/CD Pipelines**: How to automate testing and deployment
3. **VPS Deployment**: How to deploy to a real server
4. **Monitoring**: How to monitor your application
5. **Production Practices**: Security, logging, and best practices

## Getting Started

1. **Local Development**: `docker-compose up`
2. **Run Tests**: `npm test`
3. **Deploy**: Push to GitHub (auto-deploys via CI/CD)

## Phase-by-Phase Learning

### Phase 1: Basic App Development (30 minutes)
- Create simple backend API
- Create simple frontend
- Test locally

### Phase 2: Containerization (30 minutes)
- Write Dockerfiles
- Create docker-compose for local development
- Test containerized app

### Phase 3: CI/CD Setup (45 minutes)
- Set up GitHub repository
- Create GitHub Actions workflows
- Test automated builds

### Phase 4: VPS Deployment (60 minutes)
- Set up Hetzner VPS
- Install Coolify
- Deploy via CI/CD

### Phase 5: Monitoring (30 minutes)
- Add health checks
- Set up basic monitoring
- Configure alerts

**Total Learning Time: ~3 hours**

## Why This Approach Works

- **Simple**: Easy to understand each component
- **Complete**: Covers all CI/CD concepts
- **Practical**: Real deployment to real server
- **Transferable**: Same concepts apply to complex projects
- **Hands-on**: Learn by doing, not just reading

Let's start building! 🚀
# DevOps Task 1: CI/CD Pipeline with GitHub Actions

## Project Overview
This project demonstrates an automated CI/CD pipeline for a sample Node.js web application using GitHub Actions and Docker.

## Objectives
- Automate application testing.
- Build a Docker image.
- Push the Docker image to Docker Hub.
- Trigger the pipeline automatically when code is pushed to the `main` branch.

## Technologies Used
- Node.js
- GitHub
- GitHub Actions
- Docker
- Docker Hub

## Project Structure
- `app.js` – Application message logic
- `server.js` – HTTP server
- `test/app.test.js` – Automated application test
- `Dockerfile` – Instructions to build the Docker image
- `.github/workflows/main.yml` – CI/CD workflow configuration

## CI/CD Workflow
1. Checkout the source code.
2. Set up Node.js.
3. Install dependencies using `npm ci`.
4. Run automated tests using `npm test`.
5. Build the Docker image.
6. Push the image to Docker Hub.

## Docker Hub Image
`sunildevops96/devops-task1:latest`

## Run Locally
Install dependencies:

```bash
npm ci
```

Run tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

Open `http://localhost:3000` in a browser.

## GitHub Repository
https://github.com/cloudforge-96/devops-task1

## Result
The GitHub Actions workflow automates application testing and Docker image publishing to Docker Hub.

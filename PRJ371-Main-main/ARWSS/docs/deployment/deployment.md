# Deployment Guide

## Overview
This document provides a step-by-step guide to deploy the Automated Robotic Waste Sorting System (ARWSS). It includes instructions for setting up the backend, frontend, and necessary dependencies.

## Prerequisites
- Python 3.x
- Node.js and npm
- SQLite3
- Flask
- React
- V-REP/CoppeliaSim (for simulation)
- Docker and Docker Compose (optional, for containerized deployment)

## Backend Deployment

### 1. Clone the Repository
```sh
git clone https://github.com/Cellie0320/ARWSS
cd ARWSS
```

### 2. Set Up Virtual Environment
```sh
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 3. Install Backend Dependencies
```sh
pip install -r requirements.txt
```

### 4. Set Up Environment Variables
Create a `.env` file in the `ARWSS` directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

### 5. Initialize the Database
```sh
python initialize_db.py
python database.py
```

### 6. Run the Backend Server
```sh
python main.py
```

## Frontend Deployment

### 1. Navigate to the Frontend Directory
```sh
cd frontend
```

### 2. Install Frontend Dependencies
```sh
npm install
```

### 3. Build the Frontend
```sh
npm start
```

### 4. Serve the Frontend
You can use a static server like `serve` to serve the built frontend:
```sh
npm install -g serve
serve -s build
```

## Simulation Setup

### 1. Install V-REP/CoppeliaSim
Download and install V-REP/CoppeliaSim from the official website.

### 2. Open the Simulation Scene
Open the `Group 5 simulation.ttt` file in V-REP/CoppeliaSim.

### 3. Run the Simulation
Start the simulation within V-REP/CoppeliaSim.

## Docker Deployment (Optional)

### 1. Build Docker Images
```sh
docker-compose build
```

### 2. Run Docker Containers
```sh
docker-compose up
```

### 3. Access the Application
The application should be accessible at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Additional Notes

- Ensure all necessary ports are open and not blocked by firewalls.
- Regularly update dependencies to avoid security vulnerabilities.
- Monitor logs for any errors and troubleshoot as necessary.

For more detailed information, refer to the documentation in the `docs` directory.
```

This guide covers the basic steps for deploying the ARWSS project, including setting up the backend, frontend, and simulation environment. It also includes optional steps for deploying the project using Docker.
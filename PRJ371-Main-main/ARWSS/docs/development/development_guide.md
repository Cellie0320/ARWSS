
# Development Guide

## Overview
This document provides guidelines for setting up the development environment and contributing to the Automated Robotic Waste Sorting System (ARWSS). It includes instructions for setting up the backend, frontend, and simulation environment.

## Prerequisites
- Python 3.x
- Node.js and npm
- SQLite3
- Flask
- React
- V-REP/CoppeliaSim (for simulation)
- Git

## Setting Up the Development Environment

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/ARWSS.git
cd ARWSS
```

### 2. Set Up Environment Variables
Create a `.env` file in the `ARWSS` directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

### 3. Backend Setup

#### a. Create a Virtual Environment
```sh
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

#### b. Install Backend Dependencies
```sh
pip install -r requirements.txt
```

#### c. Initialize the Database
```sh
python initialize_db.py
python database.py


```

### 4. Frontend Setup

#### a. Navigate to the Frontend Directory
```sh
cd frontend
```

#### b. Install Frontend Dependencies
```sh
npm install
```

#### c. Start the Frontend Development Server
```sh
npm start
```

### 5. Simulation Setup

#### a. Install V-REP/CoppeliaSim
Download and install V-REP/CoppeliaSim from the official website.

#### b. Open the Simulation Scene
Open the `Group 5 simulation.ttt` file in V-REP/CoppeliaSim.

### 6. Running the Application

#### a. Start the Backend Server
Navigate to the `ARWSS` directory and run:
```sh
flask run
```

#### b. Start the Frontend Server
Navigate to the `frontend` directory and run:
```sh
npm start
```

#### c. Run the Simulation
Open V-REP/CoppeliaSim and load the `Group 5 simulation.ttt` file. Start the simulation.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Create a pull request to the main repository.

## Testing
### Running Unit Tests
Navigate to the `ARWSS` directory and run:
```sh
pytest
```

### Running Integration Tests
Integration tests are located in the `docs/Integration` directory. Follow the instructions in the `README.md` file within that directory to run the tests.

## Documentation
Documentation is located in the `docs` directory. It includes API documentation, architecture diagrams, deployment guides, development guides, maintenance plans, testing guides, and  a user manual.

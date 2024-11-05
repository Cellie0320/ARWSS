# User Manual

## Table of Contents
1. [Introduction](#1-introduction)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
4. [Running the Application](#4-running-the-application)
5. [Using the Application](#5-using-the-application)
6. [Troubleshooting](#6-troubleshooting)
7. [FAQ](#7-faq)
8. [Support](#8-support)

## 1. Introduction
This user manual provides step-by-step instructions on how to install, configure, and use the application. The application consists of a front-end built with React, a back-end built with Flask, and a simulation environment using CoppeliaSim.

## 2. System Requirements
- Operating System: Windows, macOS, or Linux
- Python 3.x
- Node.js and npm
- CoppeliaSim (Version 4.7.0 or higher)

## 3. Installation

### 3.1 Install Python and Virtual Environment
1. Download and install Python from [python.org](https://www.python.org/downloads/).
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Create a virtual environment:
    ```sh
    python -m venv .venv
    ```
5. Activate the virtual environment:
    - On Windows:
        ```sh
        .venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source .venv/bin/activate
        ```
6. Install the required Python packages:
    ```sh
    pip install -r requirements.txt
    ```

### 3.2 Install Node.js and React
1. Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. Open a terminal or command prompt.
3. Navigate to the `src/frontend` directory:
    ```sh
    cd src/frontend
    ```
4. Install the Node.js dependencies:
    ```sh
    npm install
    ```

### 3.3 Install CoppeliaSim
1. Download and install CoppeliaSim from [coppeliarobotics.com](https://www.coppeliarobotics.com/downloads).
2. Open a terminal or command prompt.
3. Copy the Lua scripts to your CoppeliaSim installation directory:
    ```sh
    cp -r Lua/ [CoppeliaSim-directory]/
    ```
4. Open CoppeliaSim.
5. Load the scene file:
    - Go to File → Open Scene.
    - Navigate to and select the scene file `Group 5 simulation.ttt`.

## 4. Running the Application

### 4.1 Activate the Environment
1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Activate the Python virtual environment:
    - On Windows:
        ```sh
        .venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source .venv/bin/activate
        ```

### 4.2 Start the Front-end
1. Open a terminal or command prompt.
2. Navigate to the `src/frontend` directory:
    ```sh
    cd src/frontend
    ```
3. Start the React application:
    ```sh
    npm start
    ```

### 4.3 Start the Backend
1. Open a terminal or command prompt.
2. Navigate to the `src/backend` directory:
 ```sh
cd src/backend
```
 3. Start the Flask server:
    ```sh
    python main.py
    ```

### 4.4 Start the Simulation
1. Open CoppeliaSim.
2. Load the project scene.
3. Click the Start Simulation button or press `Ctrl+P`.

## 5. Using the Application
1. Open your web browser and navigate to the front-end application.
2. Interact with the front-end to control the simulation.
3. The Flask server handles back-end operations and communicates with the simulation.
4. Use the simulation controls in CoppeliaSim to manage the simulation environment.

## 6. Troubleshooting
- Ensure all dependencies are installed correctly.
- Verify that the virtual environment is activated.
- Check for any error messages in the terminal and address them accordingly.
- Ensure the Flask server is running before starting the simulation.

## 7. FAQ
**Q:** How do I update the Python packages?
**A:** Run `pip install -r requirements.txt` in the activated virtual environment.

**Q:** How do I update the Node.js dependencies?
**A:** Navigate to the `src/frontend` directory and run `npm install`.

**Q:** How do I reset the simulation?
**A:** Reload the scene file in CoppeliaSim and restart the simulation.

## 8. Support
For additional support, please contact the project maintainers or refer to the project's documentation.

# Automated Robotic Waste Sorting System (ARWSS)
## Table of Contents
1. [Activate the Environment](#1-activate-the-environment)
2. [Start the Front-end](#2-start-the-front-end)
3. [Activate Flask](#3-activate-flask)
4. [Start the Simulation](#4-start-the-simulation)
5. [Installation Guide](#5-installation-guide)

## 1. Activate the Environment

## 2. Start the Front-end
In the frontend directory, you can run:
```sh
npm start
```
In the backend directory, you can run:
```sh
python main.py
```
## 4. Start the Simulation
In CoppeliaSim, press the "Start Simulation" button located in the top toolbar to activate the simulation environment.
## 5. Installation Guide

### Prerequisites
- Python 3.x
- Node.js and npm
- CoppeliaSim (Version 4.7.0 or higher)

### 5.1 Install Python and Virtual Environment
1. Download and install Python from [python.org](https://www.python.org/downloads/).
2. Create a virtual environment in the project directory:
    ```sh
    python -m venv .venv
    ```
3. Activate the virtual environment:
    - On Windows:
        ```sh
        .venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source .venv/bin/activate
        ```
4. Install the required Python packages:
    ```sh
    pip install -r requirements.txt
    ```

### 5.2 Install Node.js and React
1. Install fnm (Fast Node Manager):
    ```sh
    winget install Schniz.fnm
    ```
2. Configure fnm environment:
    ```sh
    fnm env --use-on-cd | Out-String | Invoke-Expression
    ```
3. Download and install Node.js:
    ```sh
    fnm use --install-if-missing 22
    ```
4. Verify the Node.js version:
    ```sh
    node -v # should print `v22.0.0`
    ```
5. Verify the npm version:
    ```sh
    npm -v # should print `10.1.0`
    ```
6. Navigate to the `src/frontend` directory:
    ```sh
    cd src/frontend
    ```
7. Install React and React DOM:
    ```sh
    npm install react react-dom
    ```
8. Install the Node.js dependencies:
    ```sh
    npm install
    ```
9. Start the React application:
    ```sh
    npm start
    ```

### 5.3 Install CoppeliaSim
1. Download and install CoppeliaSim EDU from [coppeliarobotics.com](https://www.coppeliarobotics.com/downloads).
2. Copy the Lua scripts to the `lua` folder in your CoppeliaSim installation directory. The Lua scripts are located in the [Lua folder directory](ARWSS/Lua).
    ```
    - Open CoppeliaSim
        - File → Open Scene
        - Navigate to the `ARWSS` directory and open the file `Group 5 simulation.ttt` in CoppeliaSim:
            - File → Open Scene
            - Select `Group 5 simulation.ttt`
3. Click the Start Simulation button or press `Ctrl+P`.

### 5.5 Connecting the Simulation to the Backend
1. Ensure the Flask server is running:
    ```sh
    python main.py
    ```
2. Use the `socket.http` module in Lua to make HTTP requests to the backend. Example in `main.lua`:
    ```lua
    local http = require("socket.http")
    local ltn12 = require("ltn12")
    ```

### 5.6 Additional Configuration
- Refer to the [user manual](ARWSS/docs/user_manual/user_manual.md) for detailed operating instructions.

## Future Considerations
Docker will be considered for deployment when the application is ready.

## License
Navigate to the License file to see License information for this project:
https://github.com/Cellie0320/ARWSS/blob/3d68754e8e2396d7d5aaa947e9e83052917ec3f0/LICENSE


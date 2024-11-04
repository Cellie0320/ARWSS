
# Integration Guide

## Overview
This document provides a step-by-step guide to integrate the various components of the Automated Robotic Waste Sorting System (ARWSS). It includes instructions for integrating the backend, frontend, and simulation environment.

## Prerequisites
- Python 3.x
- Node.js and npm
- SQLite3
- Flask
- React
- V-REP/CoppeliaSim (for simulation)
- Git

## Integration Steps

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/ARWSS.git
cd ARWSS
```

### 2. Set Up Virtual Environment
```sh
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### 3. Install Python Dependencies
```sh
pip install -r requirements.txt
```

### 4. Initialize the Database
```sh
python src/backend/initialize_db.py
```

### 5. Run the Flask Server
```sh
python src/backend/main.py
```

### 6. Navigate to the Frontend Directory
```sh
cd src/frontend
```

### 7. Install Node.js Dependencies
```sh
npm install
```

### 8. Start the React Application
```sh
npm start
```

### 9. Open V-REP/CoppeliaSim
- Ensure you have V-REP/CoppeliaSim installed on your machine.
- Open the simulation scene file provided in the repository.

### 10. Add Lua Scripts to Simulation
- Add the following Lua scripts to the respective objects in the simulation:
  - `main.lua`
  - `box_creation.lua`
  - `vision_sensor.lua`
  - `kr16_robot_arm.lua`
  - `baxter_vacuum_cup.lua`

### 11. Start the Simulation
- Run the simulation in V-REP/CoppeliaSim to start the sorting process.

## Connecting the Simulation to the Backend

### 1. HTTP Requests from Lua Scripts
- Use the `socket.http` module in Lua to make HTTP requests to the backend.
- Example in `main.lua`:
  ```lua
  local http = require("socket.http")
  local ltn12 = require("ltn12")

  function sendDataToAPI(year, plastics, paper, metals, endpoint)
    local url = "http://localhost:5000/" .. endpoint
    local data = string.format('{"year":%d,"plastics":%d,"paper":%d,"metals":%d}', year, plastics, paper, metals)
    local response_body = {}
    local res, code, response_headers, status = http.request{
      url = url,
      method = "POST",
      headers = {
        ["Content-Type"] = "application/json",
        ["Content-Length"] = tostring(#data)
      },
      source = ltn12.source.string(data),
      sink = ltn12.sink.table(response_body)
    }
    if code ~= 200 and code ~= 201 then
      print("Failed to send data to API. Status code: " .. code)
    else
      print("Successfully sent data to API. Response: " .. table.concat(response_body))
    end
  end
  ```

### 2. Triggering HTTP Requests
- Trigger the `sendDataToAPI` function at appropriate points in the Lua scripts to send data to the backend.

## Connecting the Backend to the Frontend

### 1. API Endpoints
The backend provides several API endpoints for data interaction:

#### Get Sorting Results
- **URL**: `/results`
- **Method**: `GET`

#### Add a New Sorting Result
- **URL**: `/results`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
  }
  ```

#### Add a New History Record
- **URL**: `/history`
- **Method**: `POST`
- **Payload**:
  ```json
  {
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
  }
  ```

### 2. Making API Requests in React
- Use the `fetch` API or `axios` library to handle HTTP requests in React components.
- Example in a React component:
  ```jsx
  import axios from 'axios';

  const fetchResults = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/results');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const addResult = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/results', {
        year: 2024,
        plastics: 30,
        paper: 10,
        metals: 7
      });
      console.log('Result added:', response.data);
    } catch (error) {
      console.error('Error adding result:', error);
    }
  };
  ```

## Testing Integration
- Use the provided `api_requests.http` file to test the API endpoints.
- Ensure the frontend components display the data correctly.
- Verify the simulation interacts with the backend as expected.

### Example API Requests
```http
### Get sorting results
GET http://127.0.0.1:5000/results

### Add a new sorting result
POST http://127.0.0.1:5000/results
Content-Type: application/json

{
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
}

### Add a new history record
POST http://127.0.0.1:5000/history
Content-Type: application/json

{
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
}
```

## Conclusion
This guide provides the necessary steps to integrate the various components of the ARWSS. Ensure all dependencies are installed and configured correctly. For any issues, refer to the individual component documentation or contact the development team.

# Test Plan for Automated Robotic Waste Sorting System (ARWSS)

## 1. Introduction

**Purpose:**  
This Test Plan outlines the approach, resources, and schedule for testing the Automated Robotic Waste Sorting System (ARWSS) project. It ensures that the system meets functional requirements, performs reliably, and delivers a seamless user experience.

## 2. Objectives
- Verify that the system functions as expected.
- Identify and fix bugs and issues.
- Validate that the system meets the specified requirements.
- Ensure the system is reliable, efficient, and maintainable.

## 3. Scope
The scope of this test plan includes:
- Unit Testing
- Integration Testing
- End-to-End (E2E) Testing
- Performance Testing
- Security Testing

## 4. Testing Strategies

### 4.1 Unit Testing
- **Objective**: Test individual components and functions to ensure they work correctly in isolation.
- **Tools**: `unittest` or `pytest` for Python, `Jest` for JavaScript/React.
- **Scope**: 
  - Backend functions and endpoints.
  - Frontend components and hooks.
  - Lua scripts for simulation.

### 4.2 Integration Testing
- **Objective**: Test the interaction between different components to ensure they work together as expected.
- **Tools**: `unittest` or `pytest` for Python, `Jest` for JavaScript/React.
- **Scope**: 
  - API requests and responses.
  - Interaction between frontend and backend.
  - Communication between Lua scripts and simulation environment.

### 4.3 End-to-End (E2E) Testing
- **Objective**: Test the entire system from start to finish to ensure it meets the end-user requirements.
- **Tools**: `Cypress` or `Selenium` for E2E testing.
- **Scope**: 
  - User login and navigation.
  - Real-time data streaming and display.
  - Sorting process and data recording.

### 4.4 Performance Testing
- **Objective**: Ensure the system performs well under expected load conditions.
- **Tools**: `JMeter` or `Locust` for performance testing.
- **Scope**: 
  - API response times.
  - Frontend rendering times.
  - Simulation performance.

### 4.5 Security Testing
- **Objective**: Identify and fix security vulnerabilities.
- **Tools**: `OWASP ZAP` or `Burp Suite` for security testing.
- **Scope**: 
  - API security.
  - User authentication and authorization.
  - Data protection.

## 5. Test Cases

### 5.1 Unit Test Cases
- **Backend**:
  - Test database connection and queries.
  - Test API endpoints for correct responses.
- **Frontend**:
  - Test React components rendering.
  - Test state management and hooks.
- **Lua Scripts**:
  - Test individual functions for correct behavior.

### 5.2 Integration Test Cases
- **Backend**:
  - Test API endpoints with database interactions.
- **Frontend**:
  - Test component interactions and data flow.
- **Lua Scripts**:
  - Test communication between scripts and simulation environment.

### 5.3 End-to-End Test Cases
- **User Login**:
  - Verify user can log in with valid credentials.
  - Verify error message for invalid credentials.
- **Data Streaming**:
  - Verify real-time data is displayed correctly.
  - Verify data stops streaming when requested.
- **Sorting Process**:
  - Verify items are sorted correctly based on sensor data.
  - Verify sorting results are recorded in the database.

## 6. Tools and Environment

### 6.1 Tools
- **Unit Testing**: `unittest`, `pytest`, `Jest`
- **Integration Testing**: `unittest`, `pytest`, `Jest`
- **E2E Testing**: `Cypress`, `Selenium`
- **Performance Testing**: `JMeter`, `Locust`
- **Security Testing**: `OWASP ZAP`, `Burp Suite`

### 6.2 Environment
- **Development**: Local machine with necessary dependencies installed.
- **Testing**: Separate testing environment with access to the database and simulation.
- **Production**: Live environment with real-time data and user access.

## 7. API Testing
Use the provided `api_requests.http` file to test the API endpoints.

### Example Requests
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
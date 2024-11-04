## Test Cases

### Unit Test Cases
- **Backend**:
  - Test database connection and queries.
  - Test API endpoints for correct responses.
- **Frontend**:
  - Test React components rendering.
  - Test state management and hooks.
- **Lua Scripts**:
  - Test individual functions for correct behavior.

### Integration Test Cases
- **Backend**:
  - Test API endpoints with database interactions.
- **Frontend**:
  - Test component interactions and data flow.
- **Lua Scripts**:
  - Test communication between scripts and simulation environment.

### End-to-End Test Cases
- **User Login**:
  - Verify user can log in with valid credentials.
  - Verify error message for invalid credentials.
- **Data Streaming**:
  - Verify real-time data is displayed correctly.
  - Verify data stops streaming when requested.
- **Sorting Process**:
  - Verify items are sorted correctly based on sensor data.
  - Verify sorting results are recorded in the database.

## Tools and Environment

### Tools
- **Unit Testing**: `unittest`, `pytest`, `Jest`
- **Integration Testing**: `unittest`, `pytest`, `Jest`
- **E2E Testing**: `Cypress`, `Selenium`
- **Performance Testing**: `JMeter`, `Locust`
- **Security Testing**: `OWASP ZAP`, `Burp Suite`

### Environment
- **Development**: Local machine with necessary dependencies installed.
- **Testing**: Separate testing environment with access to the database and simulation.
- **Production**: Live environment with real-time data and user access.

## API Testing
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
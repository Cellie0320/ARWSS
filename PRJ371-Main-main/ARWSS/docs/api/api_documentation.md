```markdown
# API Documentation

## Overview
This document provides detailed information about the API endpoints available in the Automated Robotic Waste Sorting System (ARWSS). The API allows interaction with the backend to manage sorting results and history records.

## Base URL
The base URL for all API endpoints is:
```
http://127.0.0.1:5000
```

## Endpoints

### 1. Get Sorting Results
- **URL**: `/results`
- **Method**: `GET`
- **Description**: Retrieves the sorting results.
- **Response**:
    - **Status Code**: `200 OK`
    - **Body**:
        ```json
        [
            {
                "year": 2024,
                "plastics": 30,
                "paper": 10,
                "metals": 7
            },
            ...
        ]
        ```

### 2. Add a New Sorting Result
- **URL**: `/results`
- **Method**: `POST`
- **Description**: Adds a new sorting result.
- **Request**:
    - **Headers**:
        - `Content-Type: application/json`
    - **Body**:
        ```json
        {
            "year": 2024,
            "plastics": 30,
            "paper": 10,
            "metals": 7
        }
        ```
- **Response**:
    - **Status Code**: `201 Created`
    - **Body**:
        ```json
        {
            "message": "Sorting result added successfully."
        }
        ```

### 3. Add a New History Record
- **URL**: `/history`
- **Method**: `POST`
- **Description**: Adds a new history record.
- **Request**:
    - **Headers**:
        - `Content-Type: application/json`
    - **Body**:
        ```json
        {
            "year": 2024,
            "plastics": 30,
            "paper": 10,
            "metals": 7
        }
        ```
- **Response**:
    - **Status Code**: `201 Created`
    - **Body**:
        ```json
        {
            "message": "History record added successfully."
        }
        ```

## Example Requests

### Get Sorting Results
```http
GET http://127.0.0.1:5000/results
```

### Add a New Sorting Result
```http
POST http://127.0.0.1:5000/results
Content-Type: application/json

{
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
}
```

### Add a New History Record
```http
POST http://127.0.0.1:5000/history
Content-Type: application/json

{
    "year": 2024,
    "plastics": 30,
    "paper": 10,
    "metals": 7
}
```

## Error Handling
The API uses standard HTTP status codes to indicate the success or failure of an API request. Common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request was invalid or cannot be otherwise served.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server.

## Interaction with the Frontend
The frontend of the Automated Robotic Waste Sorting System is built with React and interacts with the backend API to display sorting results and manage history records. Here is how the interaction works:

1. **Fetching Sorting Results**:
     - The frontend makes a `GET` request to the `/results` endpoint to fetch the sorting results.
     - The response data is then used to display the sorting results on the frontend interface.

2. **Adding a New Sorting Result**:
     - When a new sorting result is generated, the frontend sends a `POST` request to the `/results` endpoint with the sorting data in the request body.
     - The backend processes the request and stores the new sorting result.

3. **Adding a New History Record**:
     - The frontend sends a `POST` request to the `/history` endpoint with the history data in the request body.
     - The backend processes the request and stores the new history record.

### Example Frontend Interaction
Here is an example of how the frontend might interact with the API using JavaScript (React):

```javascript
// Fetching sorting results
fetch('http://127.0.0.1:5000/results')
    .then(response => response.json())
    .then(data => {
        // Use the data to update the frontend
        console.log(data);
    })
    .catch(error => console.error('Error fetching sorting results:', error));

// Adding a new sorting result
const newResult = {
    year: 2024,
    plastics: 30,
    paper: 10,
    metals: 7
};

fetch('http://127.0.0.1:5000/results', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newResult)
})
    .then(response => response.json())
    .then(data => {
        // Handle the response
        console.log(data);
    })
    .catch(error => console.error('Error adding sorting result:', error));

// Adding a new history record
const newHistory = {
    year: 2024,
    plastics: 30,
    paper: 10,
    metals: 7
};

fetch('http://127.0.0.1:5000/history', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newHistory)
})
    .then(response => response.json())
    .then(data => {
        // Handle the response
        console.log(data);
    })
    .catch(error => console.error('Error adding history record:', error));
```

## Contact
For any questions or issues, please contact the development team.

---

This standalone `api_documentation.md` file provides a comprehensive guide to the available endpoints, request formats, expected responses, and how the API interacts with the frontend of the ARWSS.
```
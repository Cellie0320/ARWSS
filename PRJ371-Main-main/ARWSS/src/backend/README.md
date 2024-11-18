# Backend

## Overview
The backend of this project is responsible for handling the server-side logic, database interactions, and API endpoints. It is implemented using Python.

## Directory Structure
The backend code is located in the backend directory. The main components include:

- [`save_results.py`](./save_results.py): Contains logic for saving results.
- [`api_requests.http`](./api_requests.http): Contains example HTTP requests for testing the API using tools like VS Code's REST Client extension.
- [`database.py`](./database.py): Defines the database connection and schema.
- [`initialize_db.py`](./initialize_db.py): Script to initialize the database.
- [`main.py`](./main.py): The main entry point for running the backend server.
- [`requirements.txt`](./requirements.txt): Lists the dependencies required for the backend.

## Prerequisites
Before running the backend, ensure you have the following installed:

- [Python](https://www.python.org/)

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/Cellie0320/ARWSS
    cd PRJ371-Main-main/ARWSS/src/backend
    cd ARWSS/src/backend

2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Set up environment variables:
    - Create a `.env` file in the `ARWSS` directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables.

## Running the Backend
1. Start the backend server on the default port (5000):
    ```sh
    python main.py
    ```

2. The backend server should now be running on `http://localhost:5000` (or the specified port).

## Testing

### API Endpoint Testing
You can use the [`api_requests.http`](./api_requests.http) file for testing the API endpoints. This file contains example requests for getting sorting results and adding new records.

## API Documentation
API documentation is available in the `docs/api/` directory. Refer to the documentation for details on the available endpoints and their usage.

## Future Considerations
Docker will be considered for deployment when the application is ready.

## License
This project is licensed under the terms of the [`LICENSE.md`](./LICENSE.md) file.
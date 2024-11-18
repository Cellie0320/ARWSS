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
1. Navigate to the backend directory:
    ```sh
    cd PRJ371-Main-main/ARWSS/src/backend
    ```

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

## Troubleshooting

### Common Issues

1. **Server not starting:**
    - Ensure all dependencies are installed by running `pip install -r requirements.txt`.
    - Check if the required environment variables are set correctly in the `.env` file.
    - Verify that `main.py` is being executed in the correct directory.

2. **Database connection errors:**
    - Verify the database connection details in `database.py`.
    - Ensure the database server is running.
    - Check for any firewall or network issues that might be blocking the connection.

3. **API requests failing:**
    - Check the server logs for error messages.
    - Ensure the backend server is running and accessible at the specified port.
    - Verify that the API endpoints are correctly defined and implemented.

4. **Environment variable issues:**
    - Ensure the `.env` file is correctly formatted and contains all necessary variables.
    - Restart the server after making changes to the `.env` file.

## Frequently Asked Questions (FAQ)

1. **How do I change the default port for the backend server?**
    - You can change the port by modifying the `main.py` file to use a different port number. For example:
      ```python
      if __name__ == "__main__":
          app.run(host="0.0.0.0", port=8000)
      ```

2. **How do I add new API endpoints?**
    - Define the new endpoint in `main.py` and add the corresponding logic. For example:
      ```python
      @app.route("/new_endpoint", methods=["GET"])
      def new_endpoint():
          return jsonify({"message": "New endpoint"})
      ```

3. **How do I update dependencies?**
    - Update the `requirements.txt` file with the new dependencies and run `pip install -r requirements.txt` again.

4. **How do I handle database migrations?**
    - Use a database migration tool like Alembic to manage database schema changes. Refer to the Alembic documentation for setup and usage instructions.

5. **How do I debug the backend code?**
    - Use a debugger like `pdb` or an IDE with debugging capabilities (e.g., Visual Studio Code) to set breakpoints and step through the code.

6. **How do I secure the API endpoints?**
    - Implement authentication and authorization mechanisms, such as JWT (JSON Web Tokens) or OAuth, to secure the API endpoints.

7. **How do I log errors and requests?**
    - Use a logging library like `logging` to log errors and requests. Configure the logging settings in your application to capture and store logs.
# Frontend

## Overview
This is the frontend part of the ARWSS project. It is implemented using React and is responsible for the user interface and client-side logic.

## Running the Frontend

1. **Navigate to the frontend directory:**
    ```sh
    cd PRJ371-Main-main/ARWSS/src/frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

The development server will start and open the application in your default browser, typically accessible at `http://localhost:3000`.

## Troubleshooting

### Common Issues

1. **Development server not starting:**
    - Ensure all dependencies are installed by running `npm install`.
    - Check for any error messages in the terminal and resolve them.
    - Verify that you are in the correct directory.

2. **Application not loading in the browser:**
    - Ensure the development server is running.
    - Check if the application is accessible at `http://localhost:3000`.
    - Clear the browser cache and try again.

3. **Styling issues:**
    - Ensure all CSS files are correctly imported.
    - Check for any conflicting styles or missing dependencies.

4. **JavaScript errors:**
    - Check the browser console for error messages.
    - Ensure all required modules and components are correctly imported and used.

## Frequently Asked Questions (FAQ)

1. **How do I change the default port for the development server?**
    - You can change the port by setting the `PORT` environment variable before starting the server. For example:
      ```sh
      PORT=4000 npm start
      ```

2. **How do I add new components?**
    - Create a new component file in the `src/components` directory and import it into the relevant parent component.

3. **How do I update dependencies?**
    - Update the `package.json` file with the new dependencies and run `npm install` again.

4. **How do I handle state management?**
    - Use React's built-in state management with hooks or consider using a state management library like Redux.

5. **How do I make API calls?**
    - Use the `fetch` API or a library like `axios` to make API calls from your React components.

6. **How do I deploy the frontend?**
    - Build the frontend using `npm run build` and deploy the contents of the `build` directory to your web server or hosting service.
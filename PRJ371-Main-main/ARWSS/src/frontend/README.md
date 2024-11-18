# Frontend

This is the frontend part of the ARWSS project.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Cellie0320/ARWSS
    cd ARWSS/src/frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm start
    ```

    This will start the development server and open the application in your default browser.

## Available Scripts

In the project frontend directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Troubleshooting

### Common Issues

1. **Development server not starting:**
    - Ensure all dependencies are installed by running `npm install`.
    - Check for any errors in the terminal and resolve them.
    - Ensure you are in the correct directory (`src/frontend`) when running `npm start`.

2. **Application not loading in the browser:**
    - Ensure the development server is running and accessible at `http://localhost:3000`.
    - Clear the browser cache and try again.
    - Check for any console errors in the browser's developer tools.

3. **Build errors:**
    - Check the console for error messages and resolve any issues.
    - Ensure all required files are present and correctly referenced.
    - Verify that your Node.js and npm versions are compatible with the project requirements.

4. **Styling issues:**
    - Ensure all CSS files are correctly imported.
    - Check for any conflicting styles or missing class names.

## Frequently Asked Questions (FAQ)

1. **How do I change the default port for the development server?**
    - You can change the port by setting the `PORT` environment variable before running `npm start`. For example:
      ```sh
      PORT=4000 npm start
      ```

2. **How do I add new dependencies?**
    - Use `npm install <package-name>` to add new dependencies and update the `package.json` file. For example:
      ```sh
      npm install axios
      ```

3. **How do I deploy the frontend to a production server?**
    - Run `npm run build` to create a production build and deploy the contents of the `build` folder to your server. You can use services like Netlify, Vercel, or any other static site hosting provider.

4. **How do I run tests?**
    - Use `npm test` to launch the test runner in the interactive watch mode. Ensure you have written tests in the `src` directory.

5. **How do I configure environment variables?**
    - Create a `.env` file in the root of your project and add your environment variables. For example:
      ```sh
      REACT_APP_API_URL=http://localhost:5000
      ```

6. **How do I handle API requests?**
    - Use a library like `axios` or the built-in `fetch` API to make HTTP requests to your backend. Ensure the backend server is running and accessible.
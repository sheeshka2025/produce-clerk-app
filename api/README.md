# QuickList - Produce Clerk App

QuickList is a simple, AI-powered web app designed to help supermarket produce clerks quickly create restocking lists. The user can point their phone's camera at a product, and the app uses image recognition to identify it and add it to a digital pick list.

This project was built from an idea to a fully functional, deployed web application.

## Features

* **Live Camera Access:** Uses the device's camera to provide a real-time video feed.
* **AI-Powered Identification:** Captures an image and sends it to the Google Cloud Vision AI for analysis.
* **Interactive Selection:** Displays the AI's results as tappable buttons.
* **Digital Pick List:** Allows the user to select items to build a simple digital list.

## Technology Stack

* **Front-End:** HTML, Tailwind CSS, and vanilla JavaScript.
* **Back-End:** A Node.js Serverless Function.
* **AI Service:** Google Cloud Vision AI.
* **Deployment:** Hosted on Vercel, with code managed on GitHub.

## Setup & Deployment

1.  **Code:** The project consists of an `index.html` for the front-end, a `package.json` to manage dependencies, and an `/api/identify.js` file for the serverless back-end.
2.  **API Key:** A Google Cloud Vision AI API key is required and should be stored as an environment variable in the deployment platform (e.g., Vercel) with the key name `GOOGLE_API_KEY`.
3.  **Deployment:** The project is deployed via Vercel by connecting directly to the GitHub repository.
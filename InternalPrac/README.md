
# MERN User Authentication Portal

This is a user authentication portal built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Prerequisites

- Node.js and npm
- MongoDB

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Set up the backend:**
   - Navigate to the `server` directory:
     ```sh
     cd server
     ```
   - Install the dependencies:
     ```sh
     npm install
     ```
   - Create a `.env` file in the `server` directory and add the following environment variables. Replace the placeholder values with your actual data.
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```sh
     npm start
     ```

3. **Set up the frontend:**
   - Navigate to the `client` directory:
     ```sh
     cd ../client
     ```
   - Install the dependencies:
     ```sh
     npm install
     ```
   - Start the frontend development server:
     ```sh
     npm start
     ```

4. **Access the application:**
   - Open your browser and go to `http://localhost:3000`.

## Project Structure

- `server/`: The backend code (Node.js, Express, Mongoose).
- `client/`: The frontend code (React).

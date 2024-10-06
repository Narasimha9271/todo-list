# MERN To-do Application

This is a simple To-do application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to add, delete, and view to-do items stored in a MongoDB database. The app is divided into two parts: the backend (Node.js, Express, and MongoDB) and the frontend (React.js).

## Features

-   Add new to-do items
-   Delete existing to-do items
-   Display the list of to-do items
-   Show the total count of to-dos

---

## Getting Started

### Prerequisites

-   Node.js installed
-   MongoDB (either local or MongoDB Atlas for cloud database)

### Project Structure

```bash
mern-todo-app/
├── backend/
├── frontend/
└── README.md
```

### Technologies Used

-   **Frontend**: React.js
-   **Backend**: Node.js, Express.js, MongoDB
-   **Database**: MongoDB (local or MongoDB Atlas)
-   **API**: RESTful API with CRUD operations
-   **HTTP Client**: Axios for API calls

---

## Backend Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the `backend` directory and add the following:

```plaintext
MONGO_URI=your_mongodb_connection_string
```

### 4. Run Backend Server

To run the backend server, use:

```bash
npm run dev
```

The backend server should now be running at `http://localhost:5000`.

### Backend Endpoints

-   **GET** `/api/todos`: Fetch all to-dos.
-   **POST** `/api/todos`: Add a new to-do.
-   **DELETE** `/api/todos/:id`: Delete a to-do by ID.

---

## Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Frontend

To start the frontend React app, use:

```bash
npm start
```

The frontend app should now be running at `http://localhost:3000`.

---

## Project Workflow

### 1. Add To-do

-   Use the input field to add a new to-do.
-   Click the "Add" button to add it to the list.
-   The to-do will be stored in the MongoDB database and reflected in the UI.

### 2. Delete To-do

-   Each to-do item will have a "Delete" button next to it.
-   Clicking "Delete" will remove the item from both the UI and the database.

### 3. View To-dos

-   The app will display all the to-dos retrieved from the database on page load.
-   The total number of to-dos is shown below the list.

---

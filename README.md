# HospitalMng

A full-stack Hospital Management System built to streamline hospital operations, patient handling, appointments, and administrative workflows.

## Overview

HospitalMng is designed to help hospitals manage core day-to-day activities in one place. It includes separate modules for backend services, dashboard functionality, and frontend user experience.

## Deployment

Live Demo: **https://hospital-mng-sys.netlify.app**

## Features

* Patient registration and management
* Doctor and appointment workflows
* Admin dashboard for hospital operations
* Responsive frontend interface
* REST API-based backend architecture
* Organized project structure for scalability

## Project Structure

* `backend` — server-side logic, APIs, database models, controllers, routes, and middleware
* `dashboard` — admin or management dashboard module
* `frontend` — user-facing application built with React and Vite

## Tech Stack

* Frontend: React.js, Vite, HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB
* Other tools: REST APIs, GitHub

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Dashboard

```bash
cd dashboard
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the backend folder and add the required values, such as:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Usage

1. Start the backend server.
2. Start the frontend and dashboard applications.
3. Open the application in your browser.
4. Register or log in as a user, doctor, or admin depending on the role setup.
5. Manage appointments, records, and hospital workflows.


## Future Improvements

* Notification system
* Prescription and billing modules
* Analytics dashboard
* Better mobile responsiveness

## Author

**Vraj Patel**

## License

This project is for educational and portfolio use unless you add a specific license.

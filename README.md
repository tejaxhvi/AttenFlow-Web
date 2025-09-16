# Automated Student Attendance Monitoring and Analytics System

This project is a comprehensive solution for automating student attendance tracking in colleges. It replaces traditional manual methods with a modern, efficient system using QR codes, providing valuable analytics for faculty and administrators.

## 📜 Problem Statement

Attendance tracking in most colleges is still done manually, which is time-consuming and prone to errors. This project aims to solve this by:

* **Saving valuable teaching time** otherwise wasted on manual attendance.
* **Reducing errors and eliminating** the problem of proxy attendance.
* **Providing actionable insights** for faculty to identify disengaged or struggling students.
* **Enhancing transparency and accountability** in academic processes.

## ✨ Features

### 👨‍🎓 Student
* **Mobile App:**
    * Secure login and profile management.
    * Scan QR code to mark attendance in real-time.
    * View attendance history for each course.
    * Receive notifications about attendance status.
* **Web App:**
    * Dashboard with an overview of personal attendance statistics.
    * Detailed attendance reports.

### 👩‍🏫 Teacher
* **Web App:**
    * Secure login and dashboard.
    * Generate unique, time-sensitive QR codes for each class session.
    * View real-time attendance updates as students scan the QR code.
    * Manually mark or edit attendance for students.
    * View attendance analytics and engagement levels for their courses.

### 🏢 Admin
* **Web App:**
    * Manage student and teacher accounts.
    * Create, edit, and delete courses.
    * View and export comprehensive attendance reports for the entire institution.
    * Dashboard with analytics on overall attendance trends.

## 💻 Technology Stack

This project is built with a modern, scalable technology stack:

| Category      | Technology/Library                                                                                                |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| **Web App** | [**ReactJS**](https://reactjs.org/), [**Tailwind CSS**](https://tailwindcss.com/)                                    |
| **Mobile App**| [**React Native**](https://reactnative.dev/)                                                                      |
| **Backend** | [**Flask**](https://flask.palletsprojects.com/) (Python)                                                            |
| **Database** | [**Supabase**](https://supabase.io/) (PostgreSQL)                                                                   |
| **QR Codes** | `react-qr-code` (Web), `react-native-vision-camera` (Mobile)                                                     |
| **Data Viz** | `recharts` or `react-chartjs-2`                                                                                   |

## 🏛️ Project Architecture

The system is designed with a clear separation of concerns, ensuring scalability and maintainability.

1.  **Frontend (React Web App):** The main interface for Admins and Teachers to manage the system and view analytics.
2.  **Mobile App (React Native):** The primary tool for Students to quickly and easily mark their attendance.
3.  **Backend (Flask API):** The central hub that handles all business logic, user authentication, and communication with the database.
4.  **Database (Supabase):** Securely stores all application data, manages user authentication, and provides real-time updates to the frontend.

## 🗄️ Database Schema

The database is structured to efficiently store and manage all the necessary information.

* **`profiles`**: Stores user information and roles.
* **`courses`**: Contains details about each course.
* **`enrollments`**: Maps students to the courses they are enrolled in.
* **`attendance_sessions`**: Stores information about each class session, including the generated QR code.
* **`attendance_records`**: Records the attendance status for each student in a session.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm (or yarn)
* Python and pip
* A Supabase account

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/your_username/your_project_name.git](https://github.com/your_username/your_project_name.git)
    ```
2.  **Install NPM packages for the web app**
    ```sh
    cd web-app
    npm install
    ```
3.  **Install Python packages for the backend**
    ```sh
    cd backend
    pip install -r requirements.txt
    ```
4.  **Set up your environment variables**
    * Create a `.env` file in the `backend` directory.
    * Add your Supabase URL and Key.

## 🖼️ Screenshots

*(Add screenshots of your application here to give users a visual overview of the project.)*

**Login Page**
![Login Page](link-to-your-screenshot.png)

**Student Dashboard**
![Student Dashboard](link-to-your-screenshot.png)

**Teacher Dashboard**
![Teacher Dashboard](link-to-your-screenshot.png)
# 💼 Job Listing Portal – MERN Stack

## 📌 Project Overview
The **Job Listing Portal** is a full-stack web application that connects **job seekers** with **employers**.  
It provides an easy-to-use platform where employers can post job opportunities and job seekers can search and apply for jobs.

This project is developed as part of an **internship project** using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

---

## 🚀 Features

### 🧑‍💼 Job Seeker
- User registration and login
- Browse available job listings
- Search jobs using keywords, location, and job type
- View detailed job descriptions
- Apply for jobs directly through the portal
- Manage personal profile

### 👨‍💻 Employer
- Employer registration and login
- Create new job listings
- Edit or delete posted jobs
- View applications received from job seekers

### 📊 Dashboard
- Separate dashboards for job seekers and employers
- Job seekers can track applied jobs
- Employers can manage job postings and applications

### 🔐 Authentication & Security
- Secure user authentication
- Encrypted password storage
- Role-based access control

---

## 🛠️ Technology Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT & bcrypt |
| API | RESTful APIs |

---

## 📁 Project Structure

job-listing-portal/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│
└── README.md

---

## ⚙️ Installation & Setup

### 📌 Prerequisites
- Node.js
- npm
- MongoDB (local or MongoDB Atlas)

---

### 🟢 Backend Setup
1. Open terminal
2. Navigate to backend folder:
   cd backend

3. Install dependencies:
   npm install

4. Start the server:
   node server.js

Backend runs on:
http://localhost:5000

---

### 🔵 Frontend Setup
1. Open a new terminal
2. Navigate to frontend folder:
   cd frontend

3. Install dependencies:
   npm install

4. Start the React app:
   npm start

Frontend runs on:
http://localhost:3000

---

## 📌 API Endpoints (Sample)

POST   /api/auth/register        → User registration  
POST   /api/auth/login           → User login  
GET    /api/jobs                 → Get all job listings  
POST   /api/jobs                 → Create job (Employer)  
GET    /api/jobs/:id             → Get job details  
PUT    /api/jobs/:id             → Update job  
DELETE /api/jobs/:id             → Delete job  
POST   /api/apply/:jobId         → Apply for a job  



---

## 🧾 How to Use
1. Register as a Job Seeker or Employer
2. Login to the portal
3. Employers can post and manage jobs
4. Job seekers can search and apply for jobs
5. Dashboards help manage activities efficiently

---

## 📁 Deployment
- Frontend: Netlify / Vercel
- Backend: Render / Railway
- Database: MongoDB Atlas

---

## 👨‍💻 Author
- **Name:** Divyanshu Rai
- **GitHub:** https://github.com/divyanshurai192
- **Project Type:** Internship Project

---

## ✅ Conclusion
The Job Listing Portal is a secure and scalable web application that simplifies the recruitment process by connecting employers and job seekers on a single platform.


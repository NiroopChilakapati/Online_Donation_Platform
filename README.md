# DonateHope – Online Donation Platform ❤️

A full-stack MERN donation platform that allows users to donate to trusted causes, track donation history, and enables admins to manage donation campaigns.

---

## 🌐 Live Demo

### Frontend (Live Website)

🔗 https://online-donation-platform-two.vercel.app/

### Backend API

🔗 https://online-donation-platform-vnkj.onrender.com

---

## 🚀 Features

### 👤 User Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Browse Donation Causes
- Search & Category Filter
- Donate to Causes using Razorpay
- Donation History
- User Dashboard
- Profile Page
- Toast Notifications
- Loading Spinners
- Responsive UI

### 🛠 Admin Features

- Admin Dashboard
- Add New Causes
- Manage Causes
- Delete Causes
- View All Donations
- View Donor Details
- Protected Admin Routes

### 💳 Payment Integration

- Razorpay Payment Gateway
- Secure Donation Flow
- Dynamic Donation Amount

---

## 🧰 Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS
- React Hot Toast

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database

- MongoDB Atlas
- Mongoose

### Payment

- Razorpay API

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📁 Project Structure

```bash
Online_Donation_Platform/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/NiroopChilakapati/Online_Donation_Platform.git

cd Online_Donation_Platform
```

---

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key_id

RAZORPAY_KEY_SECRET=your_key_secret
```

---

## ▶️ Run Project Locally

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🌍 Deployment Links

### Frontend

https://online-donation-platform-two.vercel.app/

### Backend API

https://online-donation-platform-vnkj.onrender.com

---

## 🔒 Authentication & Security

- JWT Based Authentication
- Protected Routes
- Admin Route Protection
- Token Expiry
- Persistent Login
- Password Hashing using bcryptjs

---

## 📌 Major Functionalities

### Users

- Register/Login
- Browse Causes
- Donate via Razorpay
- View Donation History
- Dashboard Access
- Profile Management

### Admin

- Add Causes
- Manage Causes
- Delete Causes
- View Donor Information
- View Complete Donation History

---

## 🌟 Future Improvements

- Email Notifications
- Donation Receipts
- Analytics Dashboard
- Dark Mode
- Payment Success Email
- User Profile Editing
- Donation Certificates

---

## 👨‍💻 Author

### Niroop Chilakapati

GitHub:  
https://github.com/NiroopChilakapati

LinkedIn:  
(Add your LinkedIn URL)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

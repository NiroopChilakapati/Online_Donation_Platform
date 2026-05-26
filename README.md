# DonateHope – Online Donation Platform ❤️

A full-stack MERN donation platform that allows users to donate to trusted causes, track donation history, and enables admins to manage donation campaigns.

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

### 🛠 Admin Features

- Admin Dashboard
- Add New Causes
- Manage Causes
- Delete Causes
- View All Donations
- View Donor Details

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
- CSS
- React Hot Toast

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database

- MongoDB
- Mongoose

### Payment

- Razorpay API

---

## 📁 Project Structure

```bash
online-donation-platform/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/NiroopChilakapati/Online_Donation_Platform.git
cd Online_Donation_Platform
```

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

Create a `.env` file inside backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

---

## ▶️ Run Project

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

## 🌟 Screenshots

Add screenshots of:

- Home Page
- Causes Page
- Login/Register
- Dashboard
- Admin Dashboard
- Donation History
- Profile Page

---

## 🔒 Authentication

- JWT Based Authentication
- Protected Routes
- Admin Route Protection
- Persistent Login

---

## 📌 Future Improvements

- Email Notifications
- Donation Receipts
- Analytics Dashboard
- Dark Mode
- Real-Time Updates

---

## 👨‍💻 Author

**Niroop Chilakapati**

GitHub:  
https://github.com/NiroopChilakapati

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

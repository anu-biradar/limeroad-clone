# TrendHub

A full-stack e-commerce application, built using the MERN stack (MongoDB, Express, React, Node.js). It includes features for both regular users and vendors.

## 🚀 Features

- **Authentication System**: Secure user and vendor registration and login using JWT.
- **Role-Based Access Control**: Different dashboards and permissions for `user` and `vendor` roles.
- **For Users**:
  - Browse products
  - View product details
  - Add items to cart
  - Place orders
- **For Vendors**:
  - Dedicated Vendor Dashboard
  - Add and manage products
  - Manage product images (uploaded directly to Cloudinary)
- **Cloud-Based Image Storage**: Seamless image uploading using Multer and Cloudinary.
- **Modern Frontend**: Built with React 19, initialized with Vite for fast HMR and optimized builds.

## 🛠️ Tech Stack

**Frontend:**
- React (v19)
- Vite
- React Router DOM (v7)
- Axios (API requests)
- jwt-decode (Token deciphering)
- Vanilla CSS / CSS Modules

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Multer & multer-storage-cloudinary for handling file uploads
- Cloudinary SDK

## 📁 Project Structure

```
TrendHub/
├── backend/       # Node.js + Express server
│   ├── config/    # Database configurations
│   ├── controllers/# Route controllers (Auth, Products, Cart, etc.)
│   ├── middleware/# Custom middleware (Auth, File Upload)
│   ├── models/    # Mongoose models
│   ├── routes/    # Express routes
│   └── server.js  # Entry point
│
└── frontend/      # React + Vite application
    ├── public/    # Static assets
    └── src/
        ├── api/       # Axios configuration
        ├── components/# Reusable UI components
        ├── pages/     # Page components (Home, Login, Dashboard, etc.)
        ├── App.jsx    # Application routing definitions
        └── main.jsx   # React entry point
```

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files.

### Backend (`backend/.env`)
Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend (`frontend/.env`) - Optional
Create a `.env` file in the `frontend/` directory (if your API is hosted elsewhere):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```
*(If omitted, it defaults to `/api` which may work if you've set up a proxy).*

## 🏃‍♂️ Run Locally

Clone the project

```bash
  git clone https://github.com/anu-biradar/trendhub.git
```

Navigate to the project directory

```bash
  cd trendhub
```

### Setting up the Backend

1. Navigate to the backend directory:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

### Setting up the Frontend

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the Vite development server:
```bash
npm run dev
```

## 🌐 API Endpoints Overview

- `POST /api/auth/register` - Create a new user/vendor
- `POST /api/auth/login` - Authenticate user/vendor and get token
- `GET /api/products` - Fetch all products
- `POST /api/products` - Add a new product (Vendor only)
- `GET /api/cart` - User's shopping cart
- `GET /api/orders` - User's orders
# Complete Authentication Setup Guide

## ✅ What's Been Configured

### Backend
- ✅ MongoDB Atlas connection configured
- ✅ Local authentication (email/password) ready
- ✅ Google OAuth configured
- ✅ JWT token generation
- ✅ Session management
- ✅ User model with password hashing

### Frontend
- ✅ Login page with email/password
- ✅ Register page created
- ✅ Google OAuth button
- ✅ Token storage and management
- ✅ Protected routes

## 🚀 How to Start

### 1. Start Backend Server

```bash
cd /Users/adityasingh/CodeWars/CodeWars/backend
npm start
```

You should see:
```
✓ Google OAuth configured with:
  Client ID: 424377260224-62iojeohqtm1gnh631048kd0q41h7nfa.apps.googleusercontent.com
  Callback URL: http://localhost:3001/api/auth/google/callback

🚀 CodeHub API Server Running
📡 Port: 3001
```

### 2. Start Frontend Server

```bash
cd /Users/adityasingh/CodeWars/CodeWars/frontend
npm run dev
```

You should see:
```
VITE ready in XXX ms
➜  Local:   http://localhost:5173/
```

## 📝 How to Use

### Option 1: Register with Email/Password

1. Go to http://localhost:5173
2. Click "Sign Up" at the bottom
3. Fill in:
   - Full Name
   - Email
   - Password (min 6 characters)
   - Confirm Password
4. Click "Create Account"
5. You'll be redirected to `/dashboard`

### Option 2: Login with Email/Password

1. Go to http://localhost:5173
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to `/dashboard`

### Option 3: Continue with Google

1. Go to http://localhost:5173
2. Click "Continue with Google"
3. **IMPORTANT**: Make sure you've configured Google OAuth properly (see below)
4. Select your Google account
5. You'll be redirected to `/dashboard`

## 🔧 Google OAuth Setup (Required for Google Login)

### Step 1: Google Cloud Console Configuration

1. Go to https://console.cloud.google.com/apis/credentials
2. Find your OAuth 2.0 Client ID: `424377260224-62iojeohqtm1gnh631048kd0q41h7nfa`
3. Click on it to edit

### Step 2: Add Authorized Redirect URI

Under "Authorized redirect URIs", add:
```
http://localhost:3001/api/auth/google/callback
```

**CRITICAL**: Must be EXACT - no trailing slash, correct port

### Step 3: Configure OAuth Consent Screen

1. Go to "OAuth consent screen"
2. If status is "Testing":
   - Scroll to "Test users"
   - Click "ADD USERS"
   - Add your Google email
   - Click "SAVE"

### Step 4: Restart Backend

After making changes in Google Cloud Console:
```bash
# In backend terminal, press Ctrl+C
npm start
```

## 🗄️ Database Configuration

Your MongoDB Atlas connection is configured:
```
mongodb+srv://adityahacks123:adityahacks123@cluster0.1wv0mvc.mongodb.net/authSystem
```

**Database**: `authSystem`
**Collection**: `users`

## 🧪 Testing Authentication

### Test Email/Password Registration

```bash
# Use curl or Postman
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "name": "Test User",
    "email": "test@example.com"
  },
  "token": "eyJhbGc..."
}
```

### Test Email/Password Login

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test Google OAuth

1. Open browser: http://localhost:5173
2. Click "Continue with Google"
3. Check browser console and backend logs for any errors

## 🔍 Troubleshooting

### Issue: "Unauthorized" error with Google OAuth

**Solution**: 
1. Verify redirect URI in Google Cloud Console
2. Add your email as test user
3. Restart backend server
4. Clear browser cache

See: `/backend/GOOGLE_OAUTH_TROUBLESHOOTING.md`

### Issue: "Network error" on login/register

**Solution**:
1. Check backend is running on port 3001
2. Check MongoDB connection
3. Check browser console for CORS errors

### Issue: Can't connect to MongoDB

**Solution**:
1. Verify MongoDB Atlas credentials
2. Check network access in MongoDB Atlas (allow your IP)
3. Test connection:
```bash
cd backend
node -e "require('dotenv').config(); console.log(process.env.MONGODB_URI)"
```

### Issue: Token not working

**Solution**:
1. Check JWT_SECRET is set in `.env`
2. Clear localStorage in browser
3. Try logging in again

## 📊 User Flow Diagram

```
┌─────────────────┐
│   Login Page    │
│  (/)            │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌───────┐ ┌──────────┐
│Email/ │ │ Google   │
│Pass   │ │ OAuth    │
└───┬───┘ └────┬─────┘
    │          │
    └────┬─────┘
         ▼
   ┌──────────┐
   │ Backend  │
   │ Auth     │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │ MongoDB  │
   │ User     │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │ JWT      │
   │ Token    │
   └────┬─────┘
        │
        ▼
   ┌──────────┐
   │Dashboard │
   │(/dashboard)│
   └──────────┘
```

## 🎯 Next Steps

1. **Start both servers** (backend and frontend)
2. **Test registration** with email/password
3. **Test login** with email/password
4. **Configure Google OAuth** if you want to use it
5. **Test Google login** after configuration

## 📚 Additional Resources

- Backend API docs: http://localhost:3001/
- Health check: http://localhost:3001/api/health
- Auth status: http://localhost:3001/api/auth/status

## 🔐 Security Notes

- Passwords are hashed with bcrypt
- JWT tokens expire after 30 days
- Session cookies are httpOnly
- CORS is configured for localhost:5173
- MongoDB credentials should be changed in production

## ✨ Features Implemented

- ✅ User registration with validation
- ✅ User login with JWT
- ✅ Google OAuth integration
- ✅ Password hashing
- ✅ Protected routes
- ✅ Token-based authentication
- ✅ Session management
- ✅ User profile storage
- ✅ Logout functionality
- ✅ Error handling

# 🚀 Quick Start Guide

## Start Your Application in 2 Steps

### Step 1: Start Backend (Terminal 1)

```bash
cd /Users/adityasingh/CodeWars/CodeWars/backend
npm start
```

**Wait for this message:**
```
✓ Google OAuth configured
🚀 CodeHub API Server Running
📡 Port: 3001
```

### Step 2: Start Frontend (Terminal 2)

```bash
cd /Users/adityasingh/CodeWars/CodeWars/frontend
npm run dev
```

**Wait for this message:**
```
➜  Local:   http://localhost:5173/
```

## 🎉 You're Ready!

Open your browser to: **http://localhost:5173**

## 🔐 Authentication Options

### Option 1: Create New Account (Email/Password)
1. Click **"Sign Up"** at the bottom
2. Enter your name, email, and password
3. Click **"Create Account"**
4. ✅ You're in the dashboard!

### Option 2: Login (Email/Password)
1. Enter your email and password
2. Click **"Sign In"**
3. ✅ You're in the dashboard!

### Option 3: Continue with Google
1. Click **"Continue with Google"**
2. Select your Google account
3. ✅ You're in the dashboard!

**Note**: For Google OAuth to work, you need to configure it in Google Cloud Console.
See `/backend/GOOGLE_OAUTH_TROUBLESHOOTING.md` for details.

## 📝 Test Credentials (if you want to test quickly)

You can create a test account:
- **Name**: Test User
- **Email**: test@example.com
- **Password**: password123

## ❓ Having Issues?

### Backend won't start?
- Check if port 3001 is available
- Check MongoDB connection
- Run: `cd backend && npm install`

### Frontend won't start?
- Check if port 5173 is available
- Run: `cd frontend && npm install`

### Can't login?
- Make sure backend is running
- Check browser console for errors
- Clear browser cache/localStorage

## 📚 Full Documentation

See `/COMPLETE_AUTH_SETUP.md` for detailed documentation.

## 🎯 What You Can Do After Login

- View your dashboard
- Access coding problems
- Start battles
- View your profile
- Track your progress

---

**Enjoy coding! 🎉**

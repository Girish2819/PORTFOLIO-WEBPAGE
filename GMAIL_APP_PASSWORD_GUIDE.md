# 🚨 URGENT: Gmail App Password Setup Required

## ❌ Current Issue
You're using your regular Gmail password (`Girish@#567`), but Gmail **requires an App Password** for third-party applications.

## ✅ Solution: Get Gmail App Password

### Step 1: Enable 2-Factor Authentication
1. Go to: https://myaccount.google.com/
2. Click **"Security"** in the left sidebar
3. Under **"Signing in to Google"**, click **"2-Step Verification"**
4. If not enabled, **enable it** (you'll need your phone)

### Step 2: Generate App Password
1. Still in **Security** section
2. Under **"Signing in to Google"**, click **"App passwords"**
3. You might need to sign in again
4. Select **"Mail"** from the dropdown
5. Click **"Generate"**
6. **Copy the 16-character password** (like: `abcd efgh ijkl mnop`)

### Step 3: Update Your .env File
```bash
cd /home/girish/Desktop/portfolio/server
nano .env
```

Replace this line:
```env
EMAIL_PASS=your-app-password-here
```

With your actual app password (remove spaces):
```env
EMAIL_PASS=abcdefghijklmnop
```

### Step 4: Restart Server
```bash
pkill -f 'node server.js'
cd /home/girish/Desktop/portfolio/server
npm run dev
```

## 🔍 Why This Happens
- Gmail blocks regular passwords for security
- App passwords are special 16-character codes
- They're safer and work with third-party apps
- Your regular password won't work with nodemailer

## ✅ After Setup
- Contact form will work perfectly
- Emails will be sent to girishranjan71@gmail.com
- No more "failed to send" errors

---

**Important**: The app password will look like: `abcd efgh ijkl mnop` (remove spaces when using it)

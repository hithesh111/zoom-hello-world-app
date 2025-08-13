# Setup Guide: Steps Outside of Zoom

This guide covers all the steps you need to complete outside of the Zoom platform to get your Hello World app working.

## 🚀 Step 1: Environment Setup

### Install Node.js
1. Go to [nodejs.org](https://nodejs.org/)
2. Download and install Node.js LTS version (16.x or higher)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Install Git (if not already installed)
1. Download from [git-scm.com](https://git-scm.com/)
2. Install with default settings
3. Verify installation:
   ```bash
   git --version
   ```

## 🔧 Step 2: Project Setup

### Navigate to Project Directory
```bash
cd /c/Users/hithe/OneDrive/MicroSaaS/Project1
```

### Install Dependencies
```bash
npm install
```

### Install Additional Build Tools
```bash
npm install --save-dev @babel/core @babel/preset-env babel-loader style-loader css-loader
```

## 🏗️ Step 3: Build the Application

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Verify Build
Check that the `dist/` folder was created with:
- `index.html`
- `bundle.js`

## 🌐 Step 4: Local Development Server

### Start Development Server
```bash
npm run dev
```

### Test Locally
1. Open browser to `http://localhost:3000`
2. You should see "Hello World" displayed
3. Check browser console for any errors

## 🔑 Step 5: Get Zoom App Credentials

### Create Zoom Developer Account
1. Go to [Zoom Developer Portal](https://developers.zoom.us/)
2. Click "Sign Up" and create an account
3. Verify your email address

### Create a New App
1. In the developer portal, click "Build App"
2. Choose "Meeting" as the app type
3. Fill in the required information:
   - **App Name**: Hello World App
   - **App Type**: Meeting
   - **Description**: A simple app that displays Hello World during calls

### Configure App Settings
1. **App Credentials**:
   - Copy your **App Key**
   - Copy your **App Signature**
   - Note your **App Secret** (keep this secure)

2. **Meeting & Webinar**:
   - Enable "Meeting" functionality
   - Add the following scopes:
     - `meeting:read`
     - `meeting:write`
     - `participant:read`

3. **App Permissions**:
   - Enable "In-Meeting App"
   - Set app to appear in meeting controls

### Update App Configuration
1. Open `src/app.js`
2. Replace placeholder values:
   ```javascript
   appKey: 'YOUR_ACTUAL_APP_KEY',
   appSignature: 'YOUR_ACTUAL_APP_SIGNATURE'
   ```

3. Update `zoom-app-manifest.json`:
   - Replace `your-domain.com` with your actual domain
   - Update author information
   - Modify support URLs

## 🚀 Step 6: Deploy to Production

### Choose a Hosting Platform

#### Option A: Vercel (Recommended for beginners)
1. Go to [vercel.com](https://vercel.com/)
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically

#### Option B: Netlify
1. Go to [netlify.com](https://netlify.com/)
2. Sign up and connect your repository
3. Build command: `npm run build`
4. Publish directory: `dist`

#### Option C: Heroku
1. Go to [heroku.com](https://heroku.com/)
2. Create new app
3. Connect your repository
4. Deploy using the included `server.js`

### Update Production URLs
1. After deployment, copy your production URL
2. Update `zoom-app-manifest.json`:
   ```json
   "url": "https://your-actual-domain.com"
   ```

## ✅ Step 7: Test Your App

### Local Testing
1. Ensure your app runs locally without errors
2. Check that Zoom SDK loads properly
3. Verify all console logs appear

### Production Testing
1. Deploy your app to production
2. Test the production URL in a browser
3. Ensure the app loads without errors

## 🔍 Step 8: Submit to Zoom Marketplace

### Complete App Configuration
1. In Zoom Developer Portal, ensure all required fields are filled
2. Upload your app icon (64x64 pixels)
3. Set app visibility (Public or Private)

### Submit for Review
1. Click "Submit for Review"
2. Wait for Zoom's review process (typically 1-2 weeks)
3. Address any feedback from Zoom team

### Publish Your App
1. Once approved, click "Publish"
2. Your app will appear in the Zoom App Marketplace
3. Users can now install and use your app

## 🐛 Troubleshooting Common Issues

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version
# Should be 16.x or higher
```

### Zoom SDK Not Loading
1. Check browser console for script loading errors
2. Verify Zoom SDK URLs are accessible
3. Ensure HTTPS is used in production

### App Not Appearing in Zoom
1. Verify app is published in marketplace
2. Check app permissions are correct
3. Ensure production URL is accessible
4. Verify app type is set to "Meeting"

### CORS Issues
1. Check that your server includes CORS headers
2. Verify domain is whitelisted in Zoom settings
3. Test with different browsers

## 📱 Testing Checklist

- [ ] App builds successfully
- [ ] App runs locally on `http://localhost:3000`
- [ ] Zoom SDK loads without errors
- [ ] App displays "Hello World" correctly
- [ ] App deploys to production successfully
- [ ] Production URL loads without errors
- [ ] App appears in Zoom marketplace
- [ ] App can be installed in Zoom
- [ ] App works during actual Zoom meetings

## 🎯 Next Steps

After completing this setup:

1. **Customize the UI**: Modify colors, fonts, and layout
2. **Add Features**: Implement additional functionality
3. **Improve UX**: Add animations and interactions
4. **Scale Up**: Consider adding user management and analytics
5. **Monetize**: Explore Zoom's monetization options

## 📞 Getting Help

If you encounter issues:

1. **Check the README.md** for detailed documentation
2. **Review Zoom Developer Documentation**: [developers.zoom.us/docs](https://developers.zoom.us/docs/)
3. **Join Zoom Developer Community**: [community.zoom.us](https://community.zoom.us/)
4. **Open Issues**: Use the GitHub issues page for this project

---

**Good luck with your Zoom app! 🚀**



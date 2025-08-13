# Zoom Hello World App

A simple Zoom app that displays "Hello World" during calls. This app demonstrates basic Zoom App SDK integration and can be used as a starting point for building more complex Zoom applications.

## Features

- ✅ Displays "Hello World" message in a beautiful, modern UI
- ✅ Integrates with Zoom App SDK
- ✅ Listens to meeting events (join, leave, state changes)
- ✅ Tracks participant events
- ✅ Responsive design that works on all devices
- ✅ Real-time status updates

## Prerequisites

Before you can use this app, you'll need:

1. **Zoom Developer Account**: Sign up at [Zoom Developer Portal](https://developers.zoom.us/)
2. **Node.js**: Version 16 or higher
3. **npm** or **yarn** package manager

## Installation

1. **Clone or download this project**
   ```bash
   git clone <your-repo-url>
   cd zoom-hello-world-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the app**
   ```bash
   npm run build
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Configuration

### 1. Get Your Zoom App Credentials

1. Go to [Zoom App Marketplace](https://marketplace.zoom.us/)
2. Click "Develop" → "Build App"
3. Choose "Meeting" as the app type
4. Fill in the app information
5. Copy your **App Key** and **App Signature**

### 2. Update the App Configuration

1. Open `src/app.js`
2. Replace the placeholder values:
   ```javascript
   appKey: 'YOUR_APP_KEY_HERE', // Your actual Zoom App Key
   appSignature: 'YOUR_APP_SIGNATURE_HERE', // Your actual App Signature
   ```

3. Update `zoom-app-manifest.json` with your information:
   - Replace `your-domain.com` with your actual domain
   - Update author information
   - Modify the icon URL if needed

### 3. Deploy Your App

1. **For Development**: Use the local server (already configured)
2. **For Production**: Deploy to a hosting service (Heroku, Vercel, AWS, etc.)
3. **Update the manifest**: Change the URL in `zoom-app-manifest.json` to your production URL

## Usage

### Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:3000`

3. The app will show "Hello World" and initialize the Zoom SDK

### Testing with Zoom

1. **Install the app in Zoom**:
   - Go to your Zoom app in the marketplace
   - Click "Install"
   - Authorize the app

2. **Join a meeting**:
   - Start or join a Zoom meeting
   - Click the "Apps" button in the meeting controls
   - Select your "Hello World" app
   - The app will appear as a panel showing "Hello World"

### Console Testing

You can test the app functions in the browser console:

```javascript
// Join a meeting (replace with actual meeting number)
joinMeeting('123456789');

// Leave the current meeting
leaveMeeting();

// Check the app status
zoomApp();
```

## Project Structure

```
zoom-hello-world-app/
├── src/
│   ├── index.html          # Main HTML template
│   ├── app.js             # Main JavaScript logic
│   └── styles.css         # App styling
├── dist/                  # Built files (generated)
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Build configuration
├── server.js              # Development server
├── zoom-app-manifest.json # Zoom app configuration
└── README.md              # This file
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm run build` - Build the app for production
- `npm run build:dev` - Build the app for development

## Customization

### Changing the Message

To change "Hello World" to something else:

1. Edit `src/index.html` - Change the `<h1>` content
2. Edit `src/styles.css` - Modify the styling as needed

### Adding More Features

The app is structured to easily add more functionality:

1. **New Events**: Add more event listeners in `setupEventListeners()`
2. **UI Elements**: Add HTML elements and style them in CSS
3. **API Calls**: Integrate with external services in the JavaScript

## Troubleshooting

### Common Issues

1. **"Zoom App not initialized"**
   - Check that you've added your App Key and Signature
   - Ensure the Zoom SDK scripts are loading properly

2. **App doesn't appear in Zoom**
   - Verify your app is published in the Zoom marketplace
   - Check that the URL in your manifest is accessible
   - Ensure your app has the correct permissions

3. **Build errors**
   - Make sure all dependencies are installed: `npm install`
   - Check Node.js version compatibility

### Debug Mode

Enable debug logging by opening the browser console. The app logs all major events and errors.

## Deployment

### Production Checklist

- [ ] Update app credentials in `src/app.js`
- [ ] Deploy to a production server
- [ ] Update the URL in `zoom-app-manifest.json`
- [ ] Test the app in a real Zoom meeting
- [ ] Submit for review in the Zoom marketplace

### Hosting Options

- **Vercel**: Easy deployment with `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **Heroku**: Use the included `server.js`
- **AWS S3 + CloudFront**: Static hosting with CDN

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you need help:

1. Check the [Zoom Developer Documentation](https://developers.zoom.us/docs/)
2. Review the [Zoom App SDK Reference](https://developers.zoom.us/docs/api-reference/zoom-api/methods/)
3. Open an issue in this repository

## Changelog

### Version 1.0.0
- Initial release
- Basic "Hello World" functionality
- Zoom SDK integration
- Meeting event handling
- Responsive UI design

---

**Happy coding! 🚀**

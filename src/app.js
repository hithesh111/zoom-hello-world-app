// Zoom App SDK integration
let zoomApp;

// Initialize the Zoom app when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Check if Zoom SDK is loaded
        if (typeof ZoomMtgEmbed === 'undefined') {
            throw new Error('Zoom SDK not loaded');
        }

        // Initialize Zoom App SDK
        zoomApp = await ZoomMtgEmbed.createApp({
            appKey: 'wGjsIoSVTHC4hE1XlugV8g', // Replace with your actual Zoom App Key
            appSignature: '9aTr5rq8OHYIXD0WNBK7K3r7tVrcK50p', // Replace with your actual App Signature
            role: 0
        });

        // Set up event listeners
        setupEventListeners();
        
        // Update status
        updateStatus('Zoom App initialized successfully!');
        
        console.log('Zoom App initialized:', zoomApp);
    } catch (error) {
        console.error('Failed to initialize Zoom App:', error);
        updateStatus('Failed to initialize Zoom App: ' + error.message);
    }
});

// Set up event listeners for Zoom events
function setupEventListeners() {
    if (!zoomApp) return;

    try {
        // Listen for meeting join events
        zoomApp.on('meeting:join', (data) => {
            console.log('Joined meeting:', data);
            updateStatus('Joined meeting successfully!');
        });

        // Listen for meeting leave events
        zoomApp.on('meeting:leave', (data) => {
            console.log('Left meeting:', data);
            updateStatus('Left meeting');
        });

        // Listen for meeting state changes
        zoomApp.on('meeting:stateChange', (data) => {
            console.log('Meeting state changed:', data);
            updateStatus(`Meeting state: ${data.state}`);
        });

        // Listen for participant events
        zoomApp.on('participant:join', (data) => {
            console.log('Participant joined:', data);
            updateStatus(`Participant joined: ${data.participant.name}`);
        });

        zoomApp.on('participant:leave', (data) => {
            console.log('Participant left:', data);
            updateStatus(`Participant left: ${data.participant.name}`);
        });
    } catch (error) {
        console.error('Error setting up event listeners:', error);
        updateStatus('Error setting up event listeners');
    }
}

// Update the status display
function updateStatus(message) {
    const statusElement = document.getElementById('status');
    if (statusElement) {
        statusElement.textContent = message;
        
        // Add a temporary highlight effect
        statusElement.style.background = '#d4edda';
        statusElement.style.color = '#155724';
        statusElement.style.borderColor = '#c3e6cb';
        
        setTimeout(() => {
            statusElement.style.background = '#f8f9fa';
            statusElement.style.color = '#495057';
            statusElement.style.borderColor = '#e9ecef';
        }, 2000);
    }
}

// Function to join a meeting (can be called from console for testing)
function joinMeeting(meetingNumber, password = '') {
    if (!zoomApp) {
        updateStatus('Zoom App not initialized');
        return;
    }

    try {
        zoomApp.joinMeeting({
            meetingNumber: meetingNumber,
            password: password,
            userName: 'Hello World App User'
        });
        updateStatus('Attempting to join meeting...');
    } catch (error) {
        console.error('Failed to join meeting:', error);
        updateStatus('Failed to join meeting');
    }
}

// Function to leave meeting
function leaveMeeting() {
    if (!zoomApp) {
        updateStatus('Zoom App not initialized');
        return;
    }

    try {
        zoomApp.leaveMeeting();
        updateStatus('Leaving meeting...');
    } catch (error) {
        console.error('Failed to leave meeting:', error);
        updateStatus('Failed to leave meeting');
    }
}

// Make functions available globally for testing
window.joinMeeting = joinMeeting;
window.leaveMeeting = leaveMeeting;
window.zoomApp = () => zoomApp;

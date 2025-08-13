// Simple Hello World App (without Zoom SDK for now)
document.addEventListener('DOMContentLoaded', () => {
    // Update status to show the app is ready
    updateStatus('Hello World App is ready! Click the buttons below to test.');
    
    // Add some interactive elements
    addInteractiveElements();
    
    console.log('Hello World App loaded successfully!');
});

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

// Add interactive elements to the app
function addInteractiveElements() {
    const container = document.querySelector('.zoom-app-container');
    
    // Create a button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.flexWrap = 'wrap';
    
    // Create test buttons
    const testButton = document.createElement('button');
    testButton.textContent = 'Test App';
    testButton.style.padding = '10px 20px';
    testButton.style.border = 'none';
    testButton.style.borderRadius = '8px';
    testButton.style.background = '#667eea';
    testButton.style.color = 'white';
    testButton.style.cursor = 'pointer';
    testButton.style.fontSize = '14px';
    testButton.style.fontWeight = '500';
    
    testButton.addEventListener('click', () => {
        updateStatus('App is working perfectly! 🎉');
        testButton.style.background = '#28a745';
        setTimeout(() => {
            testButton.style.background = '#667eea';
        }, 1000);
    });
    
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.padding = '10px 20px';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '8px';
    resetButton.style.background = '#6c757d';
    resetButton.style.color = 'white';
    resetButton.style.cursor = 'pointer';
    resetButton.style.fontSize = '14px';
    resetButton.style.fontWeight = '500';
    
    resetButton.addEventListener('click', () => {
        updateStatus('App reset! Ready for Zoom integration.');
    });
    
    // Add buttons to container
    buttonContainer.appendChild(testButton);
    buttonContainer.appendChild(resetButton);
    
    // Add button container to the main container
    container.appendChild(buttonContainer);
    
    // Add a note about Zoom integration
    const note = document.createElement('div');
    note.style.marginTop = '20px';
    note.style.padding = '15px';
    note.style.background = '#e3f2fd';
    note.style.borderRadius = '8px';
    note.style.border = '1px solid #bbdefb';
    note.style.fontSize = '12px';
    note.style.color = '#1976d2';
    note.style.textAlign = 'left';
    note.innerHTML = `
        <strong>Next Steps:</strong><br>
        1. Get Zoom App credentials from <a href="https://developers.zoom.us/" target="_blank" style="color: #1976d2;">Zoom Developer Portal</a><br>
        2. Update app.js with your credentials<br>
        3. Deploy to production<br>
        4. Submit to Zoom marketplace
    `;
    
    container.appendChild(note);
}

// Make functions available globally for testing
window.updateStatus = updateStatus;

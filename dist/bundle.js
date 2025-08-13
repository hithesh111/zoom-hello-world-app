/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app-simple.js":
/*!***************************!*\
  !*** ./src/app-simple.js ***!
  \***************************/
/***/ (() => {

eval("{// Simple Hello World App (without Zoom SDK for now)\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Update status to show the app is ready\n  updateStatus('Hello World App is ready! Click the buttons below to test.');\n\n  // Add some interactive elements\n  addInteractiveElements();\n  console.log('Hello World App loaded successfully!');\n});\n\n// Update the status display\nfunction updateStatus(message) {\n  var statusElement = document.getElementById('status');\n  if (statusElement) {\n    statusElement.textContent = message;\n\n    // Add a temporary highlight effect\n    statusElement.style.background = '#d4edda';\n    statusElement.style.color = '#155724';\n    statusElement.style.borderColor = '#c3e6cb';\n    setTimeout(function () {\n      statusElement.style.background = '#f8f9fa';\n      statusElement.style.color = '#495057';\n      statusElement.style.borderColor = '#e9ecef';\n    }, 2000);\n  }\n}\n\n// Add interactive elements to the app\nfunction addInteractiveElements() {\n  var container = document.querySelector('.zoom-app-container');\n\n  // Create a button container\n  var buttonContainer = document.createElement('div');\n  buttonContainer.style.marginTop = '20px';\n  buttonContainer.style.display = 'flex';\n  buttonContainer.style.gap = '10px';\n  buttonContainer.style.justifyContent = 'center';\n  buttonContainer.style.flexWrap = 'wrap';\n\n  // Create test buttons\n  var testButton = document.createElement('button');\n  testButton.textContent = 'Test App';\n  testButton.style.padding = '10px 20px';\n  testButton.style.border = 'none';\n  testButton.style.borderRadius = '8px';\n  testButton.style.background = '#667eea';\n  testButton.style.color = 'white';\n  testButton.style.cursor = 'pointer';\n  testButton.style.fontSize = '14px';\n  testButton.style.fontWeight = '500';\n  testButton.addEventListener('click', function () {\n    updateStatus('App is working perfectly! 🎉');\n    testButton.style.background = '#28a745';\n    setTimeout(function () {\n      testButton.style.background = '#667eea';\n    }, 1000);\n  });\n  var resetButton = document.createElement('button');\n  resetButton.textContent = 'Reset';\n  resetButton.style.padding = '10px 20px';\n  resetButton.style.border = 'none';\n  resetButton.style.borderRadius = '8px';\n  resetButton.style.background = '#6c757d';\n  resetButton.style.color = 'white';\n  resetButton.style.cursor = 'pointer';\n  resetButton.style.fontSize = '14px';\n  resetButton.style.fontWeight = '500';\n  resetButton.addEventListener('click', function () {\n    updateStatus('App reset! Ready for Zoom integration.');\n  });\n\n  // Add buttons to container\n  buttonContainer.appendChild(testButton);\n  buttonContainer.appendChild(resetButton);\n\n  // Add button container to the main container\n  container.appendChild(buttonContainer);\n\n  // Add a note about Zoom integration\n  var note = document.createElement('div');\n  note.style.marginTop = '20px';\n  note.style.padding = '15px';\n  note.style.background = '#e3f2fd';\n  note.style.borderRadius = '8px';\n  note.style.border = '1px solid #bbdefb';\n  note.style.fontSize = '12px';\n  note.style.color = '#1976d2';\n  note.style.textAlign = 'left';\n  note.innerHTML = \"\\n        <strong>Next Steps:</strong><br>\\n        1. Get Zoom App credentials from <a href=\\\"https://developers.zoom.us/\\\" target=\\\"_blank\\\" style=\\\"color: #1976d2;\\\">Zoom Developer Portal</a><br>\\n        2. Update app.js with your credentials<br>\\n        3. Deploy to production<br>\\n        4. Submit to Zoom marketplace\\n    \";\n  container.appendChild(note);\n}\n\n// Make functions available globally for testing\nwindow.updateStatus = updateStatus;\n\n//# sourceURL=webpack://zoom-hello-world-app/./src/app-simple.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app-simple.js"]();
/******/ 	
/******/ })()
;
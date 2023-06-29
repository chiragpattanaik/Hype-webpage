// Get the current URL
var currentUrl = window.location.href;
console.log(currentUrl)

// Replace %20 with spaces in the URL
var displayedUrl = decodeURIComponent(currentUrl);

// Update the URL in the address bar
window.history.replaceState({}, document.title, displayedUrl);

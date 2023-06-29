// Get the current URL
var currentUrl = window.location.pathname;

// Remove the file extension from the URL
var urlWithoutExtension = currentUrl.replace(/\.html$/, '');

// Decode the URL
var decodedUrl = decodeURIComponent(urlWithoutExtension);

// Replace %20 with spaces in the URL
var displayedUrl = decodedUrl.replace(/%20/g, ' ');

// Update the URL in the address bar
window.history.replaceState({}, document.title, displayedUrl);

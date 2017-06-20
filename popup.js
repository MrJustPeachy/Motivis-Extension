var twitterURL = chrome.extension.getURL("twitter.png");
var linkedinURL = chrome.extension.getURL("linkedin-logo.png");
var snapchatURL = chrome.extension.getURL("snapchat.png");
var facebookURL = chrome.extension.getURL("social-facebook-icon.png");
var githubURL = chrome.extension.getURL("github.png");

// Twitter Link
$(".user-information").append('<a href="https://www.twitter.com/mrjustpeachy"> <img id="twitter-icon" src="twitter.png" alt="Twitter Logo" height="40" width="40"/> </a>');
document.getElementById("twitter-icon").src = twitterURL;

// Linkedin Link
$(".user-information").append('<a href="https://www.linkedin.com/in/dillonpietsch/"> <img id="linkedin-icon" src="linkedin-logo.png" alt="Linkedin Logo" height="40" width="40"/> </a>');
document.getElementById("linkedin-icon").src = linkedinURL;

// Github Link
$(".user-information").append('<a href="https://github.com/MrJustPeachy"> <img id="github-icon" src="snap.png" alt="Github Logo" height="40" width="40"/> </a>');
document.getElementById("github-icon").src = githubURL;

/* WORK IN PROGRESS
// Snapchat Link
$(".user-information").append('<a href="https://www.twitter.com/mrjustpeachy"> <img id="snap-icon" src="snap.png" alt="Snapchat Logo" height="40" width="40"/>');
document.getElementById("snap-icon").src = snapchatURL;

// Facebook Link
$(".user-information").append('<a href="https://www.twitter.com/mrjustpeachy"> <img id="facebook-icon" src="facebook.png" alt="Facebook Logo" height="40" width="40"/> </a>');
document.getElementById("facebook-icon").src = facebookURL;
*/
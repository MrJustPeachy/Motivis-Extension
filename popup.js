var twitterURL = chrome.extension.getURL("images/twitter.png");
var linkedinURL = chrome.extension.getURL("images/linkedin-logo.png");
var snapchatURL = chrome.extension.getURL("images/snapchat.png");
var facebookURL = chrome.extension.getURL("images/social-facebook-icon.png");
var githubURL = chrome.extension.getURL("images/github.png");

function openForm(){
    window.open('https://goo.gl/forms/ams8ht436efujegy1');
}

// Twitter Link
$(".navItems").append('<li><a target="_blank" href="https://www.twitter.com/mrjustpeachy"> <img id="twitter-icon" src="' + twitterURL + '" alt="Twitter Logo" height="30px" /> </a></li>');

// Linkedin Link
$(".navItems").append('<li><a target="_blank" href="https://www.linkedin.com/in/dillonpietsch/"> <img id="linkedin-icon" src="' + linkedinURL + '" alt="Linkedin Logo" height="30px" /> </a></li>');

// Github Link
$(".navItems").append('<li> <a target="_blank" href="https://github.com/MrJustPeachy"> <img id="github-icon" src="' + githubURL + '" alt="Github Logo" height="30px" /> </a></li>');

// Button for people to submit their own information
$(".navItems").append('<li style="float: right; margin-right: 5%;"><input type="button" value="Get your social media buttons for your profile!" class="btn primary-btn" onclick="window.open(\'https://goo.gl/forms/ams8ht436efujegy1\')" /> </li>')

/* WORK IN PROGRESS
// Snapchat Link
$(".user-information").append('<a href="https://www.twitter.com/mrjustpeachy"> <img id="snap-icon" src="snap.png" alt="Snapchat Logo" height="40" width="40"/>');
document.getElementById("snap-icon").src = snapchatURL;

// Facebook Link
$(".user-information").append('<a href="https://www.twitter.com/mrjustpeachy"> <img id="facebook-icon" src="facebook.png" alt="Facebook Logo" height="40" width="40"/> </a>');
document.getElementById("facebook-icon").src = facebookURL;
*/
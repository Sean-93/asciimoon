// BECAUSE INSTAGRAM & FACEBOOK'S BROWSERS HATE THIS WEBSITE AND DISPLAYS THE CSS WRONG

// GOOD LUCK FINDING DOCUMENTATION ABOUT HOW TO FIX THIS, SO THE BEST WORKAROUND IS THIS:

// DETECTS IF SITE IS BEING VIEWED VIA INSTAGRAM OR FACEBOOK'S BROWSER AND GIVES AN ALERT

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (
    ua.indexOf("FBAN") > -1 ||
    ua.indexOf("FBAV") > -1 ||
    ua.indexOf("Instagram") > -1
  );
}

if (isFacebookApp() === true) {
  alert(
    "Thank you for checking out my site!\n\nUnfortunately, this app doesn't work correctly in this browser.\n\nOpen in Chrome*\n\n*There should be a button with 3 dots in the top-right corner. Click that, and then click 'Open in Chrome' to view the site in a compatible browser.\n\n"
  );
  console.log(
    "This application should not be viewed using this browser.  Please use any other browser to view this site."
  );
} else {
  console.log("This application is running in a compatible browser.");
}

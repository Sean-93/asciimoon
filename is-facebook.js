// BECAUSE FACEBOOK'S BROWSER HATES THIS WEBSITE AND DISPLAYS THE CSS WRONG

// GOOD LUCK FINDING DOCUMENTATION ABOUT HOW TO FIX THIS, SO THE BEST WORKAROUND IS THIS:

// DETECTS IF SITE IS BEING VIEWED VIA FACEBOOK'S BROWSER AND GIVES AN ALERT

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
}

if (isFacebookApp() === true) {
  alert(
    "Thank you for checking out my site!  Unfortunately, this app doesn't work correctly in Facebook's browser.  Please open this in any other browser, and it will work better."
  );
  console.log(
    "This application should not be viewed using Facebook's browser.  Please use any other browser to view this site."
  );
} else {
  console.log("This application is running in a compatible browser.");
}

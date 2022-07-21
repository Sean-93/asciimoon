// REQUESTING API FOR MOON PHASES FROM icalendar37.net/lunar/api

function load_moon_phases(obj, callback) {
  const gets = [];
  for (let i in obj) {
    gets.push(i + "=" + encodeURIComponent(obj[i]));
  }
  gets.push("LDZ=" + new Date(obj.year, obj.month - 1, 1) / 1000);
  const xmlhttp = new XMLHttpRequest();
  const url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&");
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(JSON.parse(xmlhttp.responseText));
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// POSTING THE MOON DATA INTO DOM

function postMoonData(moon) {
  const day = new Date().getDate();
  const dayWeek = moon.phase[day].dayWeek;
  const moonPhase = moon.phase[day].phaseName;
  const html =
    "<div>" +
    "<b>" +
    moon.nameDay[dayWeek] +
    "</b>" +
    "<div>" +
    day +
    " <b>" +
    moon.monthName +
    "</b> " +
    moon.year +
    "</div>" +
    "<div>" + "&#x22C4; &#x22C4; &#x22C4; " +
    moonPhase +
    "</div>" +
    "</div>";
  document.getElementById("moon-data").innerHTML = html;
  console.log(moonPhase);
  console.log(moon);

  // SWITCH STATEMENT TO DETERMINE WHAT MOON PHASE TO DISPLAY BY COVERING SOME OF THE ASCII MOON WITH A ROUNDED SEMI-OPAQUE BLACK ELEMENT

  switch (moonPhase) {
    case "First quarter":
      console.log("First quarter");
      document.getElementById("moon-cover").classList.add("first-quarter");
      break;
    case "Last quarter":
      console.log("Last quarter");
      document.getElementById("moon-cover").classList.add("last-quarter");
      break;
    case "New Moon":
      console.log("New Moon");
      document.getElementById("moon-cover").classList.add("new-moon");
      break;
    // THERE IS NO CASE FOR FULL MOON
  }

}

const configMoon = {
  lang: "en",
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

load_moon_phases(configMoon, postMoonData);

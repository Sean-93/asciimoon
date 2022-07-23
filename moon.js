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
  const moonLighting = moon.phase[day].lighting;
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
    "<div>" +
    "&#x22C4; &#x22C4; &#x22C4; " +
    moonPhase +
    " " +
    moonLighting +
    "%" +
    "<div>" +
    "Next full moon: " +
    "<span class='next-full-moon'>" +
    moon.nextFullMoon;
  +"</span>" + "</div>";
  "</div>" + "</div>";
  document.getElementById("moon-data").innerHTML = html;
  console.log(moon);
  console.log(moonLighting);
  console.log(moon.phase[day].isPhaseLimit);

  // ROUNDING THE LIGHTING TO MAKE IT CLEANER
  const moonLightingRounded = Math.round(moonLighting);

  // SWITCH STATEMENTS BELOW TO DETERMINE WHICH MOON PHASE TO DISPLAY BY COVERING SOME OF THE ASCII MOON WITH A ROUNDED SEMI-OPAQUE BLACK ELEMENT

  // THIS SWITCH STATEMENT IS FOR THE MAIN 4 MOON PHASES AS WELL AS WAXING & WANING STAGES
  switch (moonPhase) {
    // MAIN PHASES
    case "First Quarter":
      console.log(moonPhase);
      document.getElementById("moon-cover").classList.add("first-quarter");
      break;
    case "Last quarter":
      console.log(moonPhase);
      document.getElementById("moon-cover").classList.add("last-quarter");
      break;
    case "New Moon":
      console.log(moonPhase);
      document.getElementById("moon-cover").classList.add("new-moon");
      break;
    // THERE IS NO CASE FOR FULL MOON

    // WAXING PHASES
    // 10%
    case moonLightingRounded > 0 && moonLightingRounded < 10 && "Waxing":
      document.getElementById("moon-cover").classList.add("waxing-ten-percent");
      break;
    // 20%
    case moonLightingRounded > 10 && moonLightingRounded < 20 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-thirty-percent");
      break;
    // 30%
    case moonLightingRounded > 20 && moonLightingRounded < 30 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-thirty-percent");
      break;
    // 40%
    case moonLightingRounded > 30 && moonLightingRounded < 40 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-fourty-percent");
      break;
    // 60%
    case moonLightingRounded > 50 && moonLightingRounded < 60 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-sixty-percent");
      break;
    // 70%
    case moonLightingRounded > 60 && moonLightingRounded < 70 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-seventy-percent");
      break;
    // 80%
    case moonLightingRounded > 70 && moonLightingRounded < 80 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-eighty-percent");
      break;
    // 90%
    case moonLightingRounded > 80 && moonLightingRounded < 99 && "Waxing":
      document
        .getElementById("moon-cover")
        .classList.add("waxing-ninety-percent");
      break;

    // WANING PHASES
    // 10%
    case moonLightingRounded > 0 && moonLightingRounded < 10 && "Waning":
      document.getElementById("moon-cover").classList.add("waning-ten-percent");
      break;
    // 20%
    case moonLightingRounded > 10 && moonLightingRounded < 20 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-thirty-percent");
      break;
    // 30%
    case moonLightingRounded > 20 && moonLightingRounded < 30 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-thirty-percent");
      break;
    // 40%
    case moonLightingRounded > 30 && moonLightingRounded < 40 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-fourty-percent");
      break;
    // 60%
    case moonLightingRounded > 50 && moonLightingRounded < 60 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-sixty-percent");
      break;
    // 70%
    case moonLightingRounded > 60 && moonLightingRounded < 70 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-seventy-percent");
      break;
    // 80%
    case moonLightingRounded > 70 && moonLightingRounded < 80 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-eighty-percent");
      break;
    // 90%
    case moonLightingRounded > 80 && moonLightingRounded < 99 && "Waning":
      document
        .getElementById("moon-cover")
        .classList.add("waning-ninety-percent");
      break;
  }

  // THIS SWITCH STATEMENT IS FOR WAXING & WANING PHASES
}

const configMoon = {
  lang: "en",
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

load_moon_phases(configMoon, postMoonData);

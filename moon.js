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
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
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
    "Phase limit: " +
    moon.phase[day].isPhaseLimit +
    "</div>" +
    "<div>" +
    "&#x22C4; &#x22C4; &#x22C4; " +
    moonPhase +
    " " +
    moonLighting +
    "%" +
    "<div>" +
    "---Full Moon: " +
    "<span class='next-full-moon'>" +
    moon.nextFullMoon +
    "---</span>" +
    "</div>" +
    "</div>" +
    "</div>";
  document.getElementById("moon-data").innerHTML = html;

  // LOGGING DATA TO CONSOLE JUST CAUSE
  console.log(moon);
  console.log("Moon lighting: " + moonLighting + "%");
  console.log("Phase limit: " + moon.phase[day].isPhaseLimit);

  // ROUNDING THE LIGHTING TO MAKE IT CLEANER
  const moonLightingRounded = Math.round(moonLighting);

  // STORING MOON COVER ELEMENT IN VARIABLE
  const moonCover = document.getElementById("moon-cover");

  // SWITCH STATEMENTS BELOW TO DETERMINE WHICH MOON PHASE TO DISPLAY BY COVERING SOME OF THE ASCII MOON WITH A ROUNDED SEMI-OPAQUE BLACK ELEMENT

  // THIS SWITCH STATEMENT IS FOR THE MAIN 4 MOON PHASES AS WELL AS WAXING & WANING STAGES
  switch (moonPhase) {
    // MAIN PHASES
    case "First Quarter":
      console.log(moonPhase);
      moonCover.classList.add("first-quarter");
      break;
    case "Last quarter":
      console.log(moonPhase);
      moonCover.classList.add("last-quarter");
      break;
    case "New Moon":
      console.log(moonPhase);
      moonCover.classList.add("new-moon");
      break;
    // THERE IS NO CASE FOR FULL MOON

    // WAXING PHASES
    // 10%
    case moonLightingRounded > 0 && moonLightingRounded < 10 && "Waxing":
      moonCover.classList.add("waxing-ten-percent");
      break;
    // 20%
    case moonLightingRounded > 10 && moonLightingRounded < 20 && "Waxing":
      moonCover.classList.add("waxing-twenty-percent");
      break;
    // 30%
    case moonLightingRounded > 20 && moonLightingRounded < 30 && "Waxing":
      moonCover.classList.add("waxing-thirty-percent");
      break;
    // 40%
    case moonLightingRounded > 30 && moonLightingRounded < 50 && "Waxing":
      moonCover.classList.add("waxing-fourty-percent");
      break;
    // 60%
    case moonLightingRounded > 50 && moonLightingRounded < 60 && "Waxing":
      moonCover.classList.add("waxing-sixty-percent");
      break;
    // 70%
    case moonLightingRounded > 60 && moonLightingRounded < 70 && "Waxing":
      moonCover.classList.add("waxing-seventy-percent");
      break;
    // 80%
    case moonLightingRounded > 70 && moonLightingRounded < 80 && "Waxing":
      moonCover.classList.add("waxing-eighty-percent");
      break;
    // 90%
    case moonLightingRounded > 80 && moonLightingRounded < 99 && "Waxing":
      moonCover.classList.add("waxing-ninety-percent");
      break;

    // WANING PHASES
    // 10%
    case moonLightingRounded > 0 && moonLightingRounded < 10 && "Waning":
      moonCover.classList.add("waning-ten-percent");
      break;
    // 20%
    case moonLightingRounded > 10 && moonLightingRounded < 20 && "Waning":
      moonCover.classList.add("waning-twenty-percent");
      break;
    // 30%
    case moonLightingRounded > 20 && moonLightingRounded < 30 && "Waning":
      moonCover.classList.add("waning-thirty-percent");
      break;
    // 40%
    case moonLightingRounded > 30 && moonLightingRounded < 50 && "Waning":
      moonCover.classList.add("waning-fourty-percent");
      break;
    // 60%
    case moonLightingRounded > 50 && moonLightingRounded < 60 && "Waning":
      moonCover.classList.add("waning-sixty-percent");
      break;
    // 70%
    case moonLightingRounded > 60 && moonLightingRounded < 70 && "Waning":
      moonCover.classList.add("waning-seventy-percent");
      break;
    // 80%
    case moonLightingRounded > 70 && moonLightingRounded < 80 && "Waning":
      moonCover.classList.add("waning-eighty-percent");
      break;
    // 90%
    case moonLightingRounded > 80 && moonLightingRounded < 99 && "Waning":
      moonCover.classList.add("waning-ninety-percent");
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

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

function example_1(moon) {
  const day = new Date().getDate();
  const dayWeek = moon.phase[day].dayWeek;
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
    moon.phase[day].phaseName +
    " " +
    "" +
    (moon.phase[day].isPhaseLimit
      ? ""
      : Math.round(moon.phase[day].lighting) + "%") +
    "</div>" +
    "</div>";
  document.getElementById("ex1").innerHTML = html;
  console.log(moon.phase[day].phaseName);
}

const configMoon = {
  lang: "en",
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

load_moon_phases(configMoon, example_1);

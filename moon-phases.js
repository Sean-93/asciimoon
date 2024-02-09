let currentDate = new Date();

function getMoonPhase(date) {
  const moonIllumination = SunCalc.getMoonIllumination(date);
  let phaseName = "";

  const illumination = moonIllumination.fraction * 100;

  if (illumination < 1) {
    phaseName = "New Moon";
  } else if (illumination < 25) {
    phaseName = "Waxing Crescent";
  } else if (illumination < 50) {
    phaseName = "First Quarter";
  } else if (illumination < 75) {
    phaseName = "Waxing Gibbous";
  } else if (illumination >= 99) {
    phaseName = "Full Moon";
  } else if (illumination < 100) {
    phaseName = "Waning Gibbous";
  } else if (illumination < 125) {
    phaseName = "Last Quarter";
  } else {
    phaseName = "Waning Crescent";
  }

  return {
    illumination: illumination.toFixed(2),
    phase: moonIllumination.phase,
    phaseName: phaseName
  };
}

function displayMoonPhase(date) {
  const moonData = getMoonPhase(date);
  const moonShadow = document.getElementById('moonShadow');
  const illumination = parseFloat(100 - moonData.illumination);
  const translateValue = moonData.phase < 0.5 ? -(100 - illumination) : (100 - illumination);

  moonShadow.style.transform = `translateX(${translateValue}%)`;

  const list = document.getElementById('moonPhaseData');
  list.innerHTML = `
<div><strong>Date:</strong> ${date.toISOString().split('T')[0]}</div>
<div><strong>Moonlight:</strong> ${moonData.illumination}%</div>
<div><strong>Phase:</strong> ${moonData.phaseName}</div>
`;
}


function changeDate(days) {
  currentDate.setDate(currentDate.getDate() + days);
  displayMoonPhase(currentDate);
}

function resetToToday() {
  currentDate = new Date();
  displayMoonPhase(currentDate);
}

window.onload = () => displayMoonPhase(currentDate);
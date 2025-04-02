let currentDate = new Date();

function getMoonPhase(date) {
  const moonIllumination = SunCalc.getMoonIllumination(date);
  const illumination = moonIllumination.fraction * 100;
  
  function getMoonPhaseName(phase) {
    if (phase >= 0 && phase < 0.03) {
      return "New Moon";
    } else if (phase >= 0.03 && phase < 0.22) {
      return "Waxing Crescent";
    } else if (phase >= 0.22 && phase < 0.28) {
      return "First Quarter";
    } else if (phase >= 0.28 && phase < 0.48) {
      return "Waxing Gibbous";
    } else if (phase >= 0.48 && phase < 0.52) {
      return "Full Moon";
    } else if (phase >= 0.52 && phase < 0.72) {
      return "Waning Gibbous";
    } else if (phase >= 0.72 && phase < 0.78) {
      return "Last Quarter";
    } else if (phase >= 0.78 && phase < 0.97) {
      return "Waning Crescent";
    } else {
      return "New Moon";
    }
  }

  const phaseName = getMoonPhaseName(moonIllumination.phase);

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

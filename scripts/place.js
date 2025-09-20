document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

function calculateWindChill(tempF, speedMph) {
  return Math.round(
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// Static values (you can adjust later)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

if (temp <= 50 && wind > 3) {
  document.getElementById("windchill").textContent = `${calculateWindChill(temp, wind)}°F`;
} else {
  document.getElementById("windchill").textContent = "N/A";

}  




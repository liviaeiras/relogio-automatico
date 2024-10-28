let is24HourFormat = true;

function updateClock() {
  const now = new Date();

  const hours = is24HourFormat 
    ? String(now.getHours()).padStart(2, '0') 
    : String((now.getHours() % 12) || 12).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

  document.getElementById("clock").textContent = is24HourFormat 
    ? `${hours}:${minutes}:${seconds}` 
    : `${hours}:${minutes}:${seconds} ${amPm}`;
  
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  document.getElementById("date").textContent = `${day}/${month}/${year}`;
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  document.querySelector("button").textContent = is24HourFormat 
    ? "Alternar para 12h" 
    : "Alternar para 24h";
  updateClock();
}

setInterval(updateClock, 1000);
updateClock();

function updateTime() {
  let now = new Date();
  let utcString = now.toUTCString();
  document.getElementById('utc-clock').innerHTML = utcString.slice(5, -4);
}

setInterval(updateTime, 1000);

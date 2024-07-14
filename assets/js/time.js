//  .oooooo.   oooo                      oooo        
// d8P'  `Y8b  `888                      `888        
// 888           888   .ooooo.   .ooooo.   888  oooo  
// 888           888  d88' `88b d88' `"Y8  888 .8P'   
// 888           888  888   888 888        888888.    
// `88b    ooo   888  888   888 888   .o8  888 `88b.  
//  `Y8bood8P'  o888o `Y8bod8P' `Y8bod8P' o888o o888o 


// it's a clock, not much else to it.
//  it just tells you the time


// define hours, minutes, and seconds for later use
window.onload = displayClock;
function displayClock() {
  var hourElement = document.getElementById("hour");
  var minuteElement = document.getElementById("minutes");
  var secondElement = document.getElementById("seconds");

  // main function
  function updateTime() {
    var d = new Date();
    var secs = ("0" + d.getSeconds()).slice(-2);
    var mins = ("0" + d.getMinutes()).slice(-2);
    var hour = d.getHours();

    // convert to 12hr format
    if (CONFIG.twelveHourFormat) {
      hour = hour % 12;
      hour = hour ? hour : 12;
      hour = ("0" + hour).slice(-2);
    }

    // It's just a few colons
    hourElement.innerText = hour + ":";
    minuteElement.innerText = mins + ":";
    secondElement.innerText = secs;
  }

  // Update the time immediately
  updateTime();

  // Update the time every second
  setInterval(updateTime, 1000);
}

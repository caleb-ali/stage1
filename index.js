const currentDay = document.getElementById("currentDay");
const currentTime = document.getElementById("currentTime");

function displayTime() {
    // Get the current date and time
    const getCurrentDate = new Date(); 
    const options = { weekday: 'long' };
    const todaysDay = getCurrentDate.toLocaleDateString(undefined, options);
    //Get current Day
    currentDay.innerHTML = todaysDay;

    // const timeRightNow = getCurrentDate.toLocaleTimeString();
    const utcTimeRightNow = getCurrentDate.getTime();
    //Get current time
    currentTime.innerHTML = utcTimeRightNow;

    requestAnimationFrame(displayTime);
}

window.onload = displayTime;
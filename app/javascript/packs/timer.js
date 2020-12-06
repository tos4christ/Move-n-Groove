let startTime , stopTime, duration, activity_view;

const start = function() {
    startTime = Date.now();
}
const stop = function() {
    stopTime = Date.now();
}

const getDuration = function() {
    let timeDiff = ((stopTime - startTime) / 1000)/60;
    duration =  Math.abs(Math.round(timeDiff));
    activity_view.value = duration;
}

window.onload = function() {
    console.log('this one loaded');
    activity_view = window.document.getElementById("activity_duration");
    window.document.getElementById("start").addEventListener("click", start);
    window.document.getElementById("stop").addEventListener("click", stop);
    window.document.getElementById("duration").addEventListener("click", getDuration);
}


var pauseOverlay = document.getElementsByClassName("ytp-pause-overlay");
var parentPauseOverlay = pauseOverlay.parentNode;
parentPauseOverlay.removeChild(pauseOverlay);

var right = document.getElementsByTagName("ytm-engagement-panel");
var parentRight = right.parentNode;
parentRight.removeChild(right);

var right = document.getElementById("secondary");
var parentRight = right.parentNode;
parentRight.removeChild(right);

var bottom = document.getElementById("comments");
var parentBottom = bottom.parentNode;
parentBottom.removeChild(bottom);

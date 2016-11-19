// refactored from https://www.sitepoint.com/create-jquery-digital-clock-jquery4u/

'use strict';

var DigitalClock = function () {
  // new instance of Date
  var currentTime = new Date ( );
  
  var timeString = currentTime.toTimeString();
  var timePieces = timeString.split(" ");
  var firstPiece = timePieces[0];
  var clockDiv = $("#clock"); 

  clockDiv.html(firstPiece);
} 

$(document).ready(function() {
  // should refresh clock each second
  // takes a string or a fxn
  setInterval(DigitalClock, 1000);
});

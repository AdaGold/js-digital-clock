// Getting Started

// [x] Create a function which will do all of the work to calculate and show the time.

// [ ] Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual () hour, () minute and () second information.

// [ ] Use the () setInterval method to utilize the function you've created to update each second.

// [ ] Your solution will include one CSS file which contains your page styles, one JS file which contains your clock logic and one HTML file which contains your page structure and loads the CSS and JS resources.
// [] use date library
'use strict';

var DigitalClock = function () {
    // INITIALIZES  DATE FXN
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  // var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  // currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " ";
  
  
  $("#clock").html(currentTimeString);
} 


$(document).ready(function() {
  // should refresh clock each second
  //takes a string or a fxn
  setInterval(DigitalClock, 1000);
});

console.log("At the bottom of the JS file");
// console.log(currentHours + ":" + currentMinutes);

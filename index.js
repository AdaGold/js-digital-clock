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

  $("#clock").html(currentTime.toTimeString().split(" ")[0]);
} 

$(document).ready(function() {
  // should refresh clock each second
  //takes a string or a fxn
  setInterval(DigitalClock, 1000);
});

console.log("At the bottom of the JS file");
// console.log(currentHours + ":" + currentMinutes);

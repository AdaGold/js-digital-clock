// Your code here
$(document).ready(function() {

  var thanksGiving = new Date('November 24, 2016 00:00:00');


  var currentDate = function() {
    var today = new Date(Date.now());
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formatted = new Intl.DateTimeFormat('en-US', options).format(today);
    return new Date(formatted);
  };

  // var intervalID = setInterval(currentDate, 1000);


  var timeTillThanks = function() {
      var t = Date.parse(thanksGiving) - Date.parse(currentDate());
      var seconds = Math.floor( (t/1000) % 60 );
      var minutes = Math.floor( (t/1000/60) % 60 );
      var hours = Math.floor( (t/(1000*60*60)) % 24 );
      var days = Math.floor( t/(1000*60*60*24) );
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
  }


  var initializeClock = function(id, thankstime) {
    var clock = document.getElementById(id);
    console.log(clock);

    var t = timeTillThanks(thankstime);
    var clockFormat = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    $('#clock').html(clockFormat);
  }

  // initializeClock('clock', thanksGiving);
  // var intervalID = setInterval(timeTillThanks, 1000);


  var timeinterval = setInterval(initializeClock, 1000);











  // 
  // $('#clock').css('font-size', '3rem');
  // $('#clock').css('color', 'black');
  // $('#clock > h2').css('margin-top', '0%');
  // $('#clock').css('padding', '0%');
  // $('#clock').css('width', '70%');

});

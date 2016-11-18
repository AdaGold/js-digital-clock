//index.js

$(document).ready(function (){

  var intervalId = null

  var startClock = function(){
    intervalId = setInterval(showTime, 1000);
  }

  var showTime = function(){

    var now = new Date(Date.now());
     $('#clock').html('<h1>' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + '</h1>')
   }

   var stopClock = function() {
    clearInterval(intervalId);
  }

  $('#stop').click(function(){
    stopClock();
    $('#stop').toggle();
    $('#start').toggle();
  })

  $('#start').click(function(){
    startClock();
    $('#stop').toggle();
    $('#start').toggle();
  })


  $('#start').toggle();
  startClock();

});

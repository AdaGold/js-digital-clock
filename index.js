//index.js

$(document).ready(function (){

  var intervalId = null

  var startClock = function(){
    intervalId = setInterval(showTime, 1000);
  }

  var showDate = function(){
    var today = new Date(Date.now());
    $('#date').html('<h3>' + today.toDateString() + '</h3>')

    }

  var showTime = function(){

    var now = new Date(Date.now());
     $('#clock').html(now.toTimeString().slice(0,8))
    //  ('<h3>' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + '</h3>')
   }

   var stopClock = function() {
     console.log("hi")
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
  showDate();
  startClock();

});

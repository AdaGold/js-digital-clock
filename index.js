//index.js

$(document).ready(function (){

   var now = new Date(Date.now());
  var showTime = function(){
     setInterval(


     $('#clock').append('<h1>' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + '</h1>'),
     1000)
   }

   showTime();

});

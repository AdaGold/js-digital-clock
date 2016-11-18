// Your code here
$(document).ready(function() {

  var thanksGiving = new Date(2016, 11[, 24[, 0[, 0[, 0]]]])
  console.log(thanksGiving);


  var currentDate = function() {
    var today = new Date(Date.now());
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formatted = new Intl.DateTimeFormat('en-US', options).format(today);

    $('#clock').html(formatted);
  };

  var intervalID = setInterval(currentDate, 1000);



















  $('#clock').css('font-size', '3rem');
  $('#clock').css('color', 'black');
  $('#clock > h2').css('margin-top', '0%');
  $('#clock').css('padding', '0%');
  $('#clock').css('width', '70%');

});

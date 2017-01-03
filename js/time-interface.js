var Clock = require('./../js/scripts.js').clockModule;
var AlarmClock = require('./../js/scripts.js').AlarmclockModule;

$(document).ready(function(){
  var clock = new Clock("asdf");

 setInterval (function() {
   clock.getTime();
   $('#time').text(clock.time);
 }, 1000);
});

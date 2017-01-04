var Clock = require('./../js/scripts.js').clockModule;
var AlarmClock = require('./../js/scripts.js').alarmModule;

$(document).ready(function(){
  var clock = new Clock();
  var alarm = new AlarmClock();

 setInterval (function() {
   clock.getTime();
   $('#time').text(clock.time);
   alarm.checkAlarm(clock.time);
 }, 1000);

$('#alarm').text("12:00:00");

 $("p").click(function() {
   var myID = $(this).attr("id");
  $("#alarm").text(alarm.alarmClicks(myID));
  $('#alarm').text(alarm.alarmTime);
 });

 $(".alarm__clock__off").click(function() {
   $("body").css("animation", "rotate .1s ease-in-out");
 });

 });

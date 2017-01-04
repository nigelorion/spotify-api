function Clock() {
  this.time = 0;
}
function AlarmTime(){
  this.alarmTime = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
}

Clock.prototype.getTime = function () {
 this.time = moment().format('h:mm:ss');
};

AlarmTime.prototype.setAlarm = function (hours, minutes, seconds) {
 this.alarmTime = moment().hours(hours).minutes(minutes).seconds(seconds).format('h:mm:ss');

};
AlarmTime.prototype.checkAlarm = function (clocktime) {
  if (this.alarmTime === clocktime){
    this.alarm();
  }
};

AlarmTime.prototype.alarm = function () {
  $("p").css("animation", "rotate .6s ease-in-out infinite");
};

AlarmTime.prototype.alarmClicks = function (thisID) {

  if (thisID === "up__hours") {
    this.hours ++;
  }
  else if (thisID === "up__minutes") {
    this.minutes ++;
  }
  else if (thisID === "up__seconds") {
    this.seconds ++;
  }
  else if (thisID === "down__hours") {
    this.hours --;
  }
  else if (thisID === "down__minutes") {
    this.minutes --;
  }
  else if (thisID === "down__seconds") {
    this.seconds --;
  }

  this.setAlarm(this.hours, this.minutes, this.seconds);

}


exports.clockModule = Clock;
exports.alarmModule = AlarmTime;

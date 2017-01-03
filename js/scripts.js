function Clock(alarmTime) {
  this.time = "";
}
function AlarmClock(){
  this.alarmTime = 0;
}


Clock.prototype.getTime = function () {
 this.time = moment().format('H:mm:ss');
};

AlarmClock.prototype.setAlarm = function (alarmTime) {
 this.alarmTime = alarmTime;
};
AlarmClock.prototype.checkAlarm = function () {

};

AlarmClock.prototype.alarm = function () {

};


exports.clockModule = Clock;
exports.clockAlarmModule = AlarmClock;

var Controller = require('tessel-summer-camp')

var Servo = new Controller.Servo(1, 2, function() {
  Servo.move('left', 25)
  Servo.move('right', -25)
  setTimeout(function() {

  Servo.move('left',-25)
  Servo.move('right', 25)
}, 3000)
  setTimeout(function() {
    Servo.move('right', 30)
    Servo.move('left', 30)
  }, 6000)
  setTimeout(function() {
    Servo.move('right', -30)
    Servo.move('left', -30)
  }, 9000)
  setTimeout(function() {
//comment
  Servo.move('left',-25)
  Servo.move('right', 25)
}, 12000)
  setTimeout(function() {
    Servo.move('right', 30)
    Servo.move('left', 30)
  }, 15000)
})

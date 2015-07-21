var Controller = require('tessel-summer-camp')

var Servo = new Controller.Servo(1, 2, function() {
 Servo.Move('left', 100)
 Servo.Move('right', -100)

setTimeout(function() {
 Servo.Move('left', -100)
 Servo.Move('right', -100)
 }, 5000)
})

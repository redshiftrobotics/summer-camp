var Controller = require('tessel-summer-camp' )

var Servo = new controller.servo(1, 2, function(){
// start moving the servo right away
Servo.Move('left', 25)
Servo.Move('right', -25)

//tell node that after 300 miliseconds, it should stop the servos
setTimeout(function() {
  Servo.Move('left', 0)
  Servo.Move('right', 0 )
}, 3000)
})

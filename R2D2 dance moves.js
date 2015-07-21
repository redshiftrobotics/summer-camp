var Controller = require('tessel-summer-camp' )

var Servo = new controller.servo(1, 2, function()
// start moving the servo right away
Servo.move('left', 25)
Servo.move('right', -25)

//tell node that after 300 miliseconds, it should stop the servos
setTimeout(function() {
  servo.move('left', 0)
  servo.move('right', 0 )
}, 3000)
})

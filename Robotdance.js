var Controller = require('tessel-summer-camp')

var Servo = new Controller.Servo(1, 2, function() {
 new Controller.Button("G3", function() {
      console.log("Pressed!");
 Servo.Move('left', 100)
 Servo.Move('right', -100)

setTimeout(function() {
 Servo.Move('left', -100)
 Servo.Move('right', -100)
 }, 5000)

setTimeout(function() {
 Servo.Move('left', 50)
 Servo.Move('right', 50)
 }, 8000)

 setTimeout(function() {
  Servo.Move('left', 0)
  Servo.Move('right', 0)
}, 3000)

setTimeout(function() {
  Servo.Move('left', -100)
  Servo.Move('right', 100)
}, 10000)
});

})

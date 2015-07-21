var Controller = require('tessel-summer-camp')
new Controller.Button("G3", function() {

var Servo = new Controller.Servo(1, 2, function() {
  Servo.Move('left', 25)
  Servo.Move('right', -25)
  setTimeout(function() {

  Servo.Move('left',-25)
  Servo.Move('right', 25)
}, 3000)
  setTimeout(function() {
    Servo.Move('right', 30)
    Servo.Move('left', 30)
  }, 6000)
  setTimeout(function() {
    Servo.Move('right', -30)
    Servo.Move('left', -30)
  }, 9000)
  setTimeout(function() {
//comment
  Servo.Move('left',-25)
  Servo.Move('right', 25)
}, 12000)
  setTimeout(function() {
    Servo.Move('right', 25)
    Servo.Move('left', -25)
  }, 15000)
  setTimeout(function() {
    Servo.Move('right', 0)
    Servo.Move('left', 0)
  })
})
});

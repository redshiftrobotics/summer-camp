var controller = require ('tessel-summer-camp')

var servo = new controller.servo(1, 2, function() {
servo.move('left, 25')
servo.move('right, -25')
 })

 Piezo = new Controller.Sound(5, function()  {
});







function Function(){

    console.log("beep!");}

new Controller.Button("G3", Function);

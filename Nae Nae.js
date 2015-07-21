var Controller = require("tessel-summer-camp");
var LEDs = new Controller.LEDMatrix(function()
{
  LEDs.SetLight("1", 0);

});

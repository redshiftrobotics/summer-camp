var prompt = require('prompt')
console.log("You find yourself in a forest. You can see a house infront of you. the lights are on so you asume that there are people there. You carry a bag filled with food and a sleeping bag. What would you like to do?\n1- Sleep\n2- Eat\n3- Go deeper into the woods\n4- Head twoards the house")
prompt.start()

function initalPrompt (){
  prompt.get(['action'], function(err, result) {
    if(result.action == '1') {
      console.log("You fall alsleep. You wake up a couple hours later.")
      initalPrompt()
    } else if (result.action == '2') {
      console.log("You eat a apple.")
      initalPrompt()
    } else if(result.action =='3') {
      console.log("You start to walk into the forest only to be snached up by a hunting net. You can't reach your bag but your pocket knife fell you of you back pocket. Do you cut the net or hang around?")
      prompt.get(['action'], function(err, result) {
        if(result.action == 'cut the net') {
          console.log("You fall out of the net and break your back and die.")
    //     }
    //     else if(result.action == 'hang around') {
    //       console.log("You starve.")
    //     }
    //   }
    // }
    // else if (result.action == '4') {
    //   console.log("You go to the house and a family answers the door. The mother gasps. Is your name Josh Jones? she asks.
    //   What do you anser? yes or no? ")
    //   prompt.get(['action'], function(err, result){
    //     else if(result.action == 'yes') {
    //       console.log("My son! She yells and gives you a big hug. You learn that you had been stolen from them as a very young child. You win!")
    //     }
    //     else if (result.action == 'no') {
    //       console.log("The mother calls the police on you for tresspassing.")
    //     }
    //   })
    }
  })

}

initalPrompt()

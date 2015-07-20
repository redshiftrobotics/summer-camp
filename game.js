var prompt = require('prompt')
prompt.start()
prompt.get(['action'], function(err, result){
      console.log(result.action)

      if (result.action == "run") {
        console.log ("you ran into a bear")

        prompt.get(['action'], function(err, result){
          if (result.action == "fight the bear") {
            console.log ("to bears human heads taste like chipotle apparantly they dont like the rest of the body so now a janitor from the future has to come and clean up your organs nice job that janitor makes minimum wage jerk you lose")
          }else if (result.action == "run from the bear") {
          console.log("your new jordans got dirty but you escaped the bear")
        }else{}

        })

      }
})

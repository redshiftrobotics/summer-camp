var prompt = require ('prompt')

prompt.start()

console.log("there is an avalanch at a cliff what do you do?")
prompt.get (['action'], function (err, result) {
if (result.action == "suicide") {console.log("you trie to die by falling but a rock path saves you, you walk away")}
else if  (result.action == "jump"){console.log("you jump and miss a rock you die")}
else if (result.action == "walk"){console.log("you walk up to a rock you jump on it but the rock colides with the ground you die")}
else if (result.action == "barf"){console.log("you barf all over the rocks and dont die")}
else console.log("it rains poisen pies you die")



   })

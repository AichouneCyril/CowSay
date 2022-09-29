const wilderObject = require ("./information.js");
const cowsay = require ("cowsay");

console.log(cowsay.say({
    text : `I'm ${wilderObject.wilder.name} from ${wilderObject.wilder.campus} `,
    e : "oO",
    T : "U "
})
);
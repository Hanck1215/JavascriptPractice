let protoRabbit = {
    speak(line) {
        console.log("This " + this.type + " rabbit says '" + line + "'.") ;
    }
}

let killerRabbit = Object.create(protoRabbit) ; //以protoRabbit為原型創建一個killerRabit物件 
killerRabbit.type = "killer" ;
killerRabbit.speak = function() { console.log("speak被更改了") ;};
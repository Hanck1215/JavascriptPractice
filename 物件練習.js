function Rabbit(type) { this.type = type ; }
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'.`) ;
} ;


let rabbit = new Rabbit("none") ;
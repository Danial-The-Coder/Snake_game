console.log("Hello world")
let car1 = {
    type : "Tesla",
    color : "White"
}
console.log(car1)
class Car{
    constructor(type,color){
        this.type = type;
        this.color = color;
    }
}
let car2 = new Car("Tesla","White")

console.log(car2.type)
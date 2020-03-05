var make;
var color;
var model;

function Vehicle(make, model, color) {
    this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function() {
            return this.make + " " + this.model
        }
}
let car = new Vehicle("Toyota", "Corolla", "Black")
car.getName();
//create a class, ps: capitalize it
class Vehicle {
    //create a constructor
    constructor(description, wheels) {
        //create properties
        this.description = description;
        this.wheels = wheels;
    }
    //create methods
    describeYourSelf(){
        console.log(`I am a ${this.description} with ${this.wheels} wheels`);
    }
}
//create a new instance of the Vehicle class
let soccerBus = new Vehicle('cool soccer bus', 6); //pass in a description as well as the number of wheels
let miniVan = new Vehicle('mini van', 4);
let bike = new Vehicle('Kwasaki Ninja', 2);

//call method
soccerBus.describeYourSelf();
miniVan.describeYourSelf();
bike.describeYourSelf();

//see re-usability above?

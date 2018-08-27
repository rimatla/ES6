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

//Create a new class that will inherit from the Vehicle class.
class SemiTruck extends Vehicle { //This will make sure that the new SemiTruck has the same properties as the vehicle
    constructor(){
        super('semi-truck', 18); //super is going to refer back to the Vehicle class and then we can set up the properties
    }
}

//create a new instance of the SemiTruck class
let groceryStoreSemi = new SemiTruck();
//tapping into those methods that we already created so that we don't have to create new methods local to the SemiTruck class
groceryStoreSemi.describeYourSelf();
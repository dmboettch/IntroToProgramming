/**
 * Created by Deanne on 2/4/2016.
 */
//alert("Hello");
// this is obtrusive because the user can't do anything until they select ok
var message = "Hello";
console.log(message); //Displays Hello in the developer tools console

var temps = [14, 32, 36, 40];
console.log(temps[2]);

var person = {             //person is the object
    first: "Deanne",
    last: "Boettcher",
    age: 46,
    address: {            //address is another object
        city: "Longmont", zip: 80504
    }
};

console.log(person.address.city);

if (person.address.zip === 80504) {             //The condition is between the ()
    console.log("Hello " + person.first);
}

if (person.age >= 21 && person.age < 65) {
    console.log("Hello " + person.first + " You're old enough");
}
    else if(person.age >= 65) {
        console.log("Discount Time!");
    }
    else {
        console.log("You must leave!");
    }                                //Don't need a ; at the end of if statement

function greeting(){
    console.log("HI");
}
greeting();

var age = 30;
switch (age){
    case 21:
        console.log("I'm 21");
        break;
    case 24:
        console.log("I'm 24");
        break;
    case 30:
        console.log("I'm 30");
        break;
    default:
        console.log("I'm " + age);
        break;
}

var x = 0;
while (x < 10){
    console.log(x);
    x = x + 1;
}


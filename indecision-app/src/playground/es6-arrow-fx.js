const square = x => console.log(x * x);
square(8);

const name = "Mario Lazzari";
const getName = name => name.split(" ")[0];
console.log(getName(name));

// argument no longer works with arrow fx
const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

add(10, 20, 30);

const add2 = (a, b) => {
    //console.log(arguments);
    return a + b;
};

add2(10, 20, 30);

// this no longer works in arrow fx
const user = {
    name: "Mario",
    cities: ["Coccaglio", "Orzivecchi"]
    // printCities: cities => {
    //   console.log(cities);
    // }
};

//user.printCities();
//user.printCities2(); // undefined

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    // Create an empty pizza object
    var pizza = {};

    // Set properties for the pizza object based on the provided arguments
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    // Return the created pizza object
    return pizza;
}

// Create four pizza objects using the pizzaOven function
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("deep dish", "marinara", ["mozzarella", "feta"], ["pepperoni", "sausage", "olives"]);
var pizza4 = pizzaOven("hand tossed", "traditional", ["mozzarella"], ["mushrooms", "olives", "pepperoni"]);

// Example usage of the pizza objects
// console.log(pizza1);
// console.log(pizza2);
// console.log(pizza3);
// console.log(pizza4);


function randomPizza() {
    // Define arrays of possible options for each pizza property
    var crustTypes = ["deep dish", "hand tossed"];
    var sauceTypes = ["traditional", "marinara"];
    var cheesesOptions = [["mozzarella"], ["mozzarella", "feta"]];
    var toppingsOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

    // Use Math.random() to randomly select options
    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheeses = cheesesOptions[Math.floor(Math.random() * cheesesOptions.length)];
    var randomToppings = toppingsOptions[Math.floor(Math.random() * toppingsOptions.length)];

    // Create and return a random pizza object
    var randomPizza = pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
    return randomPizza;
}

// Example usage:
var randomPizza1 = randomPizza();
console.log(randomPizza1);

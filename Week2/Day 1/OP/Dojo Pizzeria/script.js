function pizzaOven(crustType, sauceType, cheeses,toppings){
    var pizza = {};
    pizza.crusType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses ;
    pizza.toppings = toppings ;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella",["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven( "hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2)

var pizza3 = pizzaOven( "hand tossed", "marinara", "cheddar",["ham", "olives", "caper"]);
console.log(pizza2)

var pizza4 = pizzaOven( "hand tossed", "creamy", "cheddar",["tomato", "olives", "eggplant"]);
console.log(pizza2)

var crustTypeMenu = ["hand tossed","stuffed crust","cracker crust"]
var sauceTypeMenu = ["marinara","creamy","spicy red Sauce","BBQ Sauce"]
var cheesesMenu = ["mozzarella","feta","cheddar"]
var toppingsMenu =["mushrooms","olives","onions","tomato",]

var randomCrustType = crustTypeMenu[Math.floor(Math.random()*crustTypeMenu.length)]
var randomSauceType = sauceTypeMenu[Math.floor(Math.random()*sauceTypeMenu.length)]
var randomCheeses = cheesesMenu[Math.floor(Math.random()*cheesesMenu.length)]
var randomToppings = toppingsMenu[Math.floor(Math.random()*toppingsMenu.length)]




function randomPizza(crustType, sauceType, cheeses,toppings){
    var pizzaRandom = {};
    pizzaRandom.crusType = crustType;
    pizzaRandom.sauceType = sauceType;
    pizzaRandom.cheeses = cheeses ;
    pizzaRandom.toppings = toppings ;
    return pizzaRandom;
}

var pizza5 = randomPizza(randomCrustType,randomSauceType,randomCheeses,randomToppings);
console.log(pizza5);
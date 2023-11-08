const Toppings = ['pepperoni', 'mushrooms', 'chilli']

const pizzaname = 'pepperoni'

for (const letter of pizzaname) {
    console.log(letter);
// p
// e
// p
// p
// e
// r
// o
// n
// i
          
}


for (var i = 0; i < Toppings.length; i++){
    console.log(Toppings[i]);

// pepperoni
// mushrooms
// chilli
    
}

Toppings.forEach((toppings) => console.log(toppings))
// pepperoni
// mushrooms
// chilli




for (const toping in Toppings) {
    console.log(toping);
    
}
//0
//1
//2

    

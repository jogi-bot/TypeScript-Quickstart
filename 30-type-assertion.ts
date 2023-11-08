type Pizza = {
    name: string,
    toppings:number
}

const pizza: Pizza = { name: 'krunal-Special', toppings: 5 }


       
const serialized = JSON.stringify(pizza)



console.log(serialized);

//{"name":"krunalSpecial","toppings":5}

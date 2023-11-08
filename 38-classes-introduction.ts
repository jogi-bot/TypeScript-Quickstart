class Pizza {
   name:string
    toppings: string[] = []
    
    constructor(name: string) {
        this.name = name;
    }

    addtopping(topping:string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('pepperoni')
pizza.addtopping('Pepperoni')
console.log(pizza);

//Pizza { toppings: [ 'Pepperoni' ], name: 'Pepperoni' }

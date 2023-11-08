class Pizza {
  public toppings: string[] = [];

  constructor(private name: string) {}

  public addToppings(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza("Pepperoni");
pizza.addToppings("Pepperoni");
console.log(pizza);

//Pizza { name: 'Pepperoni', toppings: [ 'Pepperoni' ] }

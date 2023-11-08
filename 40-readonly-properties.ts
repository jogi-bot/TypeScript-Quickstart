class Pizza {
  public toppings: string[] = [];

  constructor(readonly name: string) { }

  addtopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('pepperoni');
pizza.addtopping("pepperoni");
console.log(pizza);

//Pizza { name: 'pepperoni', toppings: [ 'pepperoni' ] }

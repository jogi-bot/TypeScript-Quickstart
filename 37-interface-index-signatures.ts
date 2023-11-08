interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
    toppings?: number;
    [key: number] : string
  getAvailableSizes(): void;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

 pizza = createPizza('Pepperoni', ['small', 'medium']);


pizza[1] = 'Krunal-Special';
pizza.toppings = 1;

console.log(pizza);

// {
//   '1': 'Krunal-Special',
//   name: 'Pepperoni',
//   sizes: [ 'small', 'medium' ],
//   getAvailableSizes: [Function: getAvailableSizes],
//   toppings: 1
// }



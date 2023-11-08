interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  krunal(): void;
}

let pizza: Pizza;

function createPizaa(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    krunal() {
      return this.sizes;
    },
  };
}
pizza = createPizaa("krunal-Special", ["small", "medium"]);

console.log(pizza);

// {
//   name: 'krunal-Special',
//   sizes: [ 'small', 'medium' ],
//   krunal: [Function: krunal]
// }

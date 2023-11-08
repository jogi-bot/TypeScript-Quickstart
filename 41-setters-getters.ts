class Sizes {
  constructor(public sizes: string[]) {}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

const size = new Sizes(["small", "medium"]);

console.log(size.availableSizes);

size.availableSizes = ["medium", "large"];

console.log(size.availableSizes);

// [ 'small', 'medium' ]
// [ 'medium', 'large' ]

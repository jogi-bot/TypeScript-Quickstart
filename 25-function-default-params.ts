let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 4) => x*y 

const sum = sumOrder(2, 5)

console.log(sum);   //10

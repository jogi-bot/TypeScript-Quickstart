let sumOrder : (price: number, quantity?: number) => number;

sumOrder = (x, y) => {
    if (y) {
        return x*y
    }
    else {
        return x
    }
}

const sum = sumOrder(25,5)
console.log(sum); //125


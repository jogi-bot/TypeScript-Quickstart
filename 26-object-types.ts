let pizza: { name: string; price: number; getName(): string} = {
    name: 'krunal',
    price:29,
    getName() {
        return pizza.name;
    },
};

console.log(pizza.getName());  //krunal


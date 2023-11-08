let pizzaSize: string = 'small'

function selectPizaaSize(size: 'small' | 'medium' | 'large'): void{
    pizzaSize = size
}

selectPizaaSize('large')

console.log(pizzaSize);  //large

const Pizza = {
    name: 'krunal',
    age: 21,
    get_name() {
        return this.name
    },
}

console.log(pizza.get_name());    //krunal 



//another code 

function createOreader(pizza:string, topings:string) {
    return { pizza, topings };
}
const topings = 'chizzz'
const pizza = 'italian'
console.log(createOreader(pizza, topings));   //{ pizza: 'italian', topings: 'chizzz' }


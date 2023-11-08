interface Pizza {
    name: string;
    sizes: string[]
   
}

let pizza: Pizza

function createPizaa(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
       
    }
    
}
 pizza = createPizaa('krunal-Special', ['small', 'medium'])

console.log(pizza);

//{ name: 'krunal-Special', sizes: [ 'small', 'medium' ] }






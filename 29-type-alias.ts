

type Size = 'small' | 'medium' | 'large';

type Callback = (string : Size) => void

let PizzaSize: Size = 'small';

const selectSize: Callback = x => {
     PizzaSize = x

}

selectSize('medium')

console.log(PizzaSize);

//medium 

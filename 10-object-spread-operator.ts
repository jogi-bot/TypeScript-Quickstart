const pizza = {
    name : 'pepproni'
}

const topings = ['pepproni']

const order = Object.assign({}, pizza, { topings });

const spredOrder = {...pizza, topings}

console.log(order, spredOrder);   //{ name: 'pepproni', topings: [ 'pepproni' ] } { name: 'pepproni', topings: [ 'pepproni' ] }

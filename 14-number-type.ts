const pizzacost: number = 10
const pizzaToping: number = 6

function Calculateprice(cost:number,  toppings:number):number {
    return cost + 1.5 * toppings
}

const Cost = Calculateprice(pizzacost, pizzaToping)


console.log(`Pizza costs ${Cost}`)



const coupon: string = 'pizza25'

function normalizeCoupon(code: string): string {
    return  code.toUpperCase()

}

const couponMessage: string = `Final is copon is ${normalizeCoupon(coupon)}`

console.log(couponMessage);

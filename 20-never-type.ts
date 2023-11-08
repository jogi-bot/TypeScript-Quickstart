function orderError(error:string) {
    throw new Error(error)
}

orderError('somthing-went-wrong')

//    throw new Error(error)
//           ^
// Error: somthing-went-wrong
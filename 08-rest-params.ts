function sumAll(message:number, ...arr:number[]) {
  return arr.reduce((prev, next) => prev + next , message);
}

const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum);  //55

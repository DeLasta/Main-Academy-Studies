let trueValue = true;
console.log(trueValue, typeof trueValue); //boolean

trueValue = String(trueValue); //string
console.log(trueValue, typeof trueValue);

console.log('____________________');

console.log(String(null));



console.log('____________________');

console.log('62' + 'n'); //will be a string '62n'



console.log('____________________');

console.log(Number(null)); //will be a number '0'
console.log(Number(true)) //will be a number '1'
console.log(Number("")) //will be a number '0' - NO Space



console.log('____________________');
console.log(Boolean(undefined))  // will be 'false'
console.log(Boolean(null), "null") //will be 'false'

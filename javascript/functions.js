function addNums(a,b){
     c=a+b;
    console.log(c);

    
}

addNums(45,89);
addNums(2,7);


//camelCase
//pascalCase
//snake_case
//kebab_case
console.log(c);


const avgNums = function (a,b,c){
    const avg =(a+b+c)/3;
    console.log(avg);
    return avg;
}
const result=avgNums(4,6,8);
console.log(result);


//new in es6 = arrow functions

const factorial=(n)=> {
    let f=1;
    for(let i=1; i<=n;i++){
        f=f*i;
    }
    return f;
}

let fact = factorial(6);
console.log(fact);



// create a functions to check if anumbers is prime 

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

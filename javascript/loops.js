// for loop

for (let i=0;i<10;i++){
    console.log(i);
}

let nums =[3,4,8,6,1,9];



// for loop
for(let n of nums){
    console.log(n);
}


let a=10;
while (a<20){
    console.log(a);
    a++;
}

let b=10;
do{
    console.log(b);
    b++;
} while (b>20);





// 10-50 divisible number of 7 between 10-50

for (let i = 10; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}




// WAP print fibonacci series  first ten digit
let x = 0;
let y = 1;

for (let i = 1; i <= 10; i++) {
  console.log(x);
  let z = x + y;
  x = y;
  y=z;
}



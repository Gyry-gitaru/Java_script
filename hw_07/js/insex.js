let arr = [];
let arrLng;
let sum = 1;

do {
    arrLng = +prompt(`Please, enter array lenght`);
    
    if(arrLng) arrLng = Math.abs(arrLng); 
    if(arrLng) arrLng = Math.round(arrLng);

} while (!arrLng || arrLng > 10 || arrLng < 2)

for( i = 1; i <= arrLng; i++) {
    arr.push(Math.round(Math.random()*10)); 
}

for(j = 0; j < arr.length; j++) {
    sum *= arr[j];
}

console.log(`Your array: [${arr}]`);
console.log(`Product of all elements your array: ${sum}`);
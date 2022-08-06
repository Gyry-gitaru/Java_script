const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
];

function getPrice (products, seasonFunc) {
    
    let copiedProducts = JSON.parse(JSON.stringify(products));
    let funcSum = 0;

    for (let i = 0; i < copiedProducts.length; i ++) {

        for (let j = 0; j < copiedProducts[i].length; j++) {
            
            if (typeof copiedProducts[i][j] === 'number') {
                if ( !seasonFunc) {
                    funcSum += copiedProducts[i][j];
                } else {
                    funcSum += seasonFunc (copiedProducts[i][j]);
                }
            }     
        }
    }
    return funcSum;
}


function summerValue(value){
	return value*0.8;
}

function winterValue(value){
	return value*2;
}

console.log(`Summer value is ${getPrice(products, summerValue)}`);
console.log(`------`);
console.log(`Winter value is ${getPrice(products, winterValue)}`);
console.log(`------`);
console.log(`Products value are ${getPrice(products)}`);

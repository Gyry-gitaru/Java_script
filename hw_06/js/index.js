let bulka;
let purse = 0;
let orderCheese;

do {
    bulka = prompt('Would you like hamburger or cheeseburger??')

    if(bulka) bulka = bulka.trim().toLowerCase();

} while (bulka !== 'hamburger' && bulka !== 'cheeseburger')

if (bulka === 'hamburger') {
    purse += 10; 
} else if (bulka === 'cheeseburger') {

    purse += 15;
    orderCheese = confirm('Would you like to add double cheese?');

    if(orderCheese) purse += 5;
}

let potato = confirm(`Would you like potato?`);
let potatoSize;

if(potato) {

    do {
        potatoSize = prompt(`Choose potato size: small/middle/big`);

        if(potatoSize) potatoSize = potatoSize.trim().toLowerCase();
    } while (potatoSize === 'small' && potatoSize !== 'middle' && potatoSize !== 'big')

    if(potatoSize === 'small' || !potatoSize) {
        purse += 10;
        potatoSize = 'small';
    } else if (potatoSize === 'middle') {
        purse += 15;
    } else if (potatoSize === 'big') {
        purse += 20;
    }
}

let sause = confirm(`Would you like sauce?`);
let sauseType;

if(sause) {
    do {
        sauseType = prompt(`Choose sauce: ketchup/mayonnaise`);
        if(sauseType) sauseType = sauseType.trim().toLowerCase();
    } while (sauseType === 'ketchup' && sauseType !== 'mayonnaise')

    if(sauseType === 'ketchup' || !sauseType) {
        purse += 2;
        sauseType = 'ketchup';
    } else if (sauseType === 'mayonnaise') {
        purse += 3;
    }
}

console.log(bulka, potatoSize, sauseType);

document.write(`<ul>
    <li>Bulka 🍔: ${bulka}</li>
    ${potato ? `<li>Potato 🍟: ${potatoSize}</li>` : ``}
    ${sause ? `<li>Sauce 🧂: ${sauseType} </li>` : ``}
</ul>
<p>Final price: $${purse}</p>`
);


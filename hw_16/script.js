const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(obj) {
        Object.assign(this, obj)
    }

    makeCoffee() {
        return `<div class="cup">
            <div class="${this.getCoffeeClass().join(` `)}">
                ${this.getIngredients()}
            </div>
            <p class="coffee__title">${this.title}</p>
        </div>`;
    }

    getCoffeeClass(){
        return [`coffee`];
    }

    getIngredients(){
        const arr = [];
        if (this.ingredients) {
            for (let ing in this.ingredients) {
                arr.push(`<p style="height: ${this.ingredients[ing]}%" class="ingredient ${ing.replaceAll(' ', '__')}">${ing}</p>`);
            }
            return `<div class="coffee__ingredients"> ${arr.join(" ")}</div>`;
        }
    }
}

class Espresso extends Coffee {
    constructor(coffee){
        super(coffee);
    }

    getCoffeeClass(){
        let classes = super.getCoffeeClass();
        classes.push(`coffee--espresso`);
        return classes;
    }
}

class EspressoMilk extends Coffee {
    constructor(coffee){
        super(coffee);
    }

    getCoffeeClass(){
        let classes = super.getCoffeeClass();
        classes.push(`coffee--espressoMilk`);
        return classes;
    }
}

class Alcoholic extends Coffee {
    constructor(coffee){
        super(coffee);
    }

    getCoffeeClass(){
        let classes = super.getCoffeeClass();
        classes.push(`coffee--alcoholic`);
        return classes;
    }
}

class Dessert extends Coffee {
    constructor(coffee){
        super(coffee);
    }

    getCoffeeClass(){
        let classes = super.getCoffeeClass();
        classes.push(`coffee--dessert`);
        return classes;
    }
}


const COFFEE_CLASSES = {
    Espresso: item => new Espresso(item),
    EspressoMilk: item => new EspressoMilk(item),
    Alcoholic: item => new Alcoholic(item),
    Dessert: item => new Dessert(item)
}

let renderDefaultCoffee = new Coffee().makeCoffee();

let coffeeTypesClass = Object
    .keys(COFFEE_TYPES)
    .map(type => {
        return COFFEE_TYPES[type]
            .map(coffee => COFFEE_CLASSES[type] ? COFFEE_CLASSES[type](coffee) : new Coffee(coffee))
    });

coffeeTypesClass = coffeeTypesClass.reduce((finalArr, arr) => finalArr.concat(arr), []);

coffeeTypesClass = coffeeTypesClass
    .map(coffee => coffee.makeCoffee())
    .join(``);

let defaultCoffee = new Coffee(
    {
        title: `Default Coffee`,
        ingredients: {
            espresso: 50,
            whiskey: 10,
            "whipped cream": 40
        }
    }
)

document.write(`<div class="cups">
    ${defaultCoffee.makeCoffee()}
    ${coffeeTypesClass}
</div>`);


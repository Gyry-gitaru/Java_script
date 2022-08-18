const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

let capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

class Vegetable{
    constructor(veg){
        this.type = `Vegetable`;
        this.seasonKoef = 1.3;

        Object.assign(this, veg);
    }

    getPrice(){
        return this.season ? this.price * this.seasonKoef : this.price;
    }

    getInfo(){
        let string = Object.keys(this)
            .map(key => {
                if (key === 'price') 
                    this[key] = this.getPrice(this[key]);
                    return key
            })


            .map(key => `${capitalize(key)}: ${this[key]}`)
            .join('. ')

        return string;
    }
}

let newVegetables = vegetables
    .map(veg => new Vegetable(veg))
    .map(veg => `<li>${veg.getInfo()}</li>`)
    .join(' ')

document.write(`<ul>${newVegetables}</ul>`);

const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo (list, caption) {
    let TRs = [];

    for(let tr = 0; tr < list.length; tr++) {
        let TDs = [];
        let innerArray = list[tr];

        for( let td = 0; td < innerArray.length; td++ ) {
            let data = innerArray[td];
            if(Array.isArray(innerArray[td])) {
                data = data.join().replaceAll(',', ';');
            }
            
            TDs.push(`<td>${data}</td>`);
        }

        TRs.push(`<tr>${TDs.join('')}</tr>`);
    }
    
    console.log(TRs);
    document.write(`<table border="1">
    <caption>${caption} Info </caption>
    ${TRs.join('')}
</table>`);
}

getInfo(animals,`Animals`);
getInfo(food, `Food`);
getInfo(universes, `Universes`);

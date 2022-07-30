let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summerSports = sports.slice(-6);
let winterSports = sports.slice(0, 5);

let summerFruits = summerSports.splice(2, 2);
let winterFruits = winterSports.splice(2, 1);
let fruits = winterFruits.concat(summerFruits);

console.log(`*** Winter sports ***
${winterSports.join('\n').replaceAll(',', ':')}

*** Summer sports *** 
${summerSports.join('\n').replaceAll(',', ':')}

*** Fruits ***
${fruits.join('\n').replaceAll(',', ':')}
`);


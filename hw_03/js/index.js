const userName = prompt('Please, enter your name');
const userSurname = prompt('Please, enter your surname');
const userDate = parseInt(prompt('Please, enter date of your birthday'));
const userMonth = parseInt(prompt('Please, enter month of your birthday (only numbers)'));
const userYear = parseInt(prompt('Please, enter year of your birthday'));
let value = '';

const YEAR = 2022; 
const result = YEAR - userYear;


const leapYear = '(leap year)';


switch (userMonth) {
    case 1:
        if (userDate <= 19)
            value = 'Capricorn ♑';
        else
            value = 'Aquarius ♒';
        break;
    case 2:
        if (userDate <= 18)
            value = 'Aquarius ♒';
        else
            value = 'Pisces ♓';
        break;
    case 3:
        if (userDate <= 20)
            value = 'Pisces ♓';
        else
            value = 'Aries ♈';
        break;
    case 4:
        if (userDate <= 19)
            value = 'Aries ♈';
        else
            value = 'Taurus ♉';
        break;
    case 5:
        if (userDate <= 20)
            value = 'Taurus ♉';
        else
            value = 'Gemini ♊';
        break;
    case 6:
        if (userDate <= 21)
            value = 'Gemini ♊';
        else
            value = 'Cancer ♋';
        break;
    case 7:
        if (userDate <= 22)
            value = 'Cancer ♋';
        else
            value = 'Leo ♌';
        break;
    case 8:
        if (userDate <= 22)
            value = 'Leo ♌';
        else
            value = 'Virgo ♍';
        break;
    case 9:
        if (userDate <= 22)
            value = 'Virgo ♍';
        else
            value = 'Libra ♎';
        break;
    case 10:
        if (userDate <= 22)
            value = 'Libra ♎';
        else
            value = 'Scorpio ♏';
        break;
    case 11:
        if (userDate <= 22)
            value = 'Scorpio ♏';
        else
            value = 'Sagittarius ♐';
        break;
    case 12:
        if (userDate <= 21)
            value = 'Sagittarius ♐';
        else
            value = 'Capricorn ♑';
        break;
    default:
          value = 'Please, enter numbers'

}




if(userYear % 400 === 0 || userYear % 4 === 0) {
    console.log(`User Bio: ${userName} ${userSurname}, ${result} years old ${leapYear}, ${value};`);
} else if (userYear % 100 === 0) {
    console.log(`User Bio: ${userName} ${userSurname}, ${result} years old, ${value};`);
} else {
    console.log(`User Bio: ${userName} ${userSurname}, ${result} years old, ${value};`);
}

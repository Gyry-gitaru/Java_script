const someText = prompt('Please enter some string');
const idNumber = Number(prompt('Please, enter number from 1 to 4'));
if(idNumber === 1) {
    const userIndex = Number(prompt('Please, enter number'));
    const str = someText;
    const result = str.charCodeAt(userIndex);
    console.log(result);
} else if (idNumber === 2) {
    const userIndex = Number(prompt('Please, choose index'));
    const str = someText;
    const result = str.slice(0, userIndex) + str.slice(userIndex + 1);
    console.log(result);
} else if (idNumber === 3) {
    const userIndex = Number(prompt('Please, choose index'));
    const arr = someText.split('');
    array = ['<3', ':)', '(:', ';)', '(;', '))', '((', '$', '@', '&'];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
    const randomInt = getRandomIntInclusive(0, array.length);
    arr[userIndex] = array[randomInt];
    const result = arr.join('');
    console.log(result);
} else if (idNumber === 4) {
    const str = someText.replace(/\s/g, '');
    console.log(str.length);
}




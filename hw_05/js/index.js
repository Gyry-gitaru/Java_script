const userQuastion = confirm('Tell me three most important words 💚');

if(userQuastion) {
    const wordCount = 3;
    let finalStr = ``;

    for(let i = 1; i<= wordCount; i++) {
        
        let word;
        do {
            word = prompt(`Please, enter word #${i}`);

            if(word) word = word.trim();

        } while (!word || /\d/.test(word))

        console.log(word);

        let format;

     do {
         format = prompt(`Choose type of transformation for "${word}": uppercase || lowercase || capitalize`);
         if(format) format = format.replaceAll(` `, ``).toLowerCase();

     } while (!format || (format !== 'uppercase' && format !== 'lowercase' && format !== 'capitalize'))

     console.log(format);

     switch (format) {
        case 'uppercase':
            word = word.toUpperCase();
            break;
        case 'lowercase':
            word = word.toLowerCase();
            break;
        case 'capitalize':
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            break;
    }
    console.log(word);
    finalStr += word;
    finalStr += i===wordCount ? `!` : ` `;

    }

     alert(finalStr)
}




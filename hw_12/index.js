const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
];

let usersName = []; 
users.forEach( item => { usersName.push(item[0] + '!')});
console.log(usersName);
      
let usersNamesMap = users.map( user => user[0] + `?`)     
console.log(usersNamesMap);

let teamRed = users
    .filter(user => user[1] === 'red');
console.log(teamRed);


let sum = teamRed.reduce ((final, user) => final + user[2], 0);
console.log(sum);

let result = teamRed
    .map(item => `<tr>${
        item
            .map(innerArr => `<td>${innerArr}</td>`)
            .join('')
        }</tr>`)
    .join('');
console.log(result);

document.write(`<table>
    <tr>
        <th>Name</th>
        <th>Comand</th>
        <th>Score</th>
        <th>Data</th>
    </tr>
    ${result}
    <tr>
        <td colspan="4"> Total score: ${sum}</td>
    </tr>
</table>`);




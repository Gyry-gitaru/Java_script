const postTable = document.createElement('table');
let comics = document.querySelector('#Comics');
const form = document.querySelector('#myHero');
let heroName = document.querySelector('.heroName');
let input_checkbox = document.querySelector(`.input_checkbox`);


const getFile = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    let response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
}

(async () => {
    try{
        let array = await getFile(`https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`);

        let newArr = array.map(item => generateTable(item))
        .join('')

        let universe = await getFile(`https://61c9d37520ac1c0017ed8eac.mockapi.io/universes`, 'GET').then(data => comics.innerHTML =  data.map( (element) => 
        `<option class="option" value="${element.name}">${element.name}</option>`))

    } catch (err){
        console.log(`In catch: ${err}`);
    }
})();

const generateTHead = () => {
    const tHead = document.createElement('thead');

    tHead.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Comics</th>
            <th>Favourite</th>
            <th>Actions</th>
        </tr>`

    postTable.append(tHead);
}
generateTHead()


const generateTable = (item) => {
    const tBody = document.createElement('tbody');
    const tr = document.createElement('tr');
        
    tr.innerHTML = `
        <td>'${item.name}'</td>
        <td>'${item.comics}'</td>`;

    const td = document.createElement('td')
    const div = document.createElement('div')

    const tdInput = document.createElement('td');
    let input = document.createElement('input')
    input.type = "checkbox";
    input.checked = item.favourite;
  
    input.addEventListener('change', async () => {
        let heroChanged = await getFile(`https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes/${item.id}`, `PUT`, {favourite: input.checked});
    })
   
    tdInput.append(input);
    tr.append(tdInput)
    
    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete`;
    
    deleteBtn.addEventListener(`click`, () => {
           
        tr.remove();
        fetch(`https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes/${item.id}`,{method: `DELETE`}).then(data => data.json())
    });

    div.append(deleteBtn);
    td.append(div)

    tr.append(td);
    tBody.append(tr);
    postTable.append(tBody);
    document.body.append(postTable)
}
 
form.addEventListener('submit', async event => {
    event.preventDefault();

    let heroes = await getFile(`https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`);
    let heroReady = heroes.find(hero => hero.name === heroName.value);

    if(heroReady){
        console.log(`Hero name ${heroName.value} already exist!`);
        return;
    } else {
        let newHero = {
            name: heroName.value,
            comics: comics.value,
            favourite: input_checkbox.checked
        }

        let heroPost = await getFile(`https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`, `POST`, newHero);
    }
})





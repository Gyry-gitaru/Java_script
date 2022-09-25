const categories = document.querySelector('#jokesCategories');
const jokeValue = document.querySelector('#jokesList');

const getFile = file => fetch(file)
.then(data => data.ok ? data.json() : Promise.reject(data.statusText))

getFile(`https://api.chucknorris.io/jokes/categories`)
.then(data => {
    categories.innerHTML =  data.map( (element, index) => 
        `<option class="option" value="${element}">${element}</option>`)
})
.catch(err => console.log(`In catch: ${err}`))

categories.addEventListener('change', function(){
    fetch(`https://api.chucknorris.io/jokes/random?category=${categories.value}`)
    .then((data) => data.json())
    .then(data => {
        document.querySelector(`option[value="${categories.value}"]`)
                .disabled = true;

        const postBlock = document.createElement(`li`);
        postBlock.className = `item_li`;
        postBlock.innerHTML = `<p>Category: 
                                    <b>${data.categories}</b>
                                </p>
                                <p class="joke">${data.value}</p>`;

        const deleteBtn = document.createElement(`button`);
        deleteBtn.innerHTML = `Remove joke`;
        deleteBtn.addEventListener(`click`, () => {
        postBlock.remove();
        document.querySelector(`option[value="${data.categories}"]`)
                 .disabled = false;
    });

        postBlock.append(deleteBtn);

        jokeValue.append(postBlock);

    })

    .catch(err => console.log(`In catch: ${err}`))
});
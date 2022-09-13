let element = document.querySelector('#element');
const form = document.querySelector('#form');
const figure = form.querySelector('#figure');
const color = form.querySelector('#color');
let elementType = '';
let previosFigure = '';


form.addEventListener('submit', event => {
    event.preventDefault();

    elementType = figure.value;

    if(previosFigure !== '' && elementType !== previosFigure) {
        element.classList.remove(previosFigure)
    }
    
    element.classList.add(elementType);

    previosFigure = elementType; 
    element.style.background = color.value;

})



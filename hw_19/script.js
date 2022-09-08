const block = document.querySelector(`#div`);
let moveOn = 10;
const text = document.querySelector('p');

const getMaxLeftPosition = () => document.body.clientWidth - block.clientWidth;
const getMaxTopPosition = () =>  document.body.clientHeight - block.clientHeight;

const textFunction = () => {
    text.classList.add('text');
    setTimeout(() => {text.classList.remove('text')} ,2000);
}

const onRightArrowClick = () => {
    block.style.left = block.offsetLeft + moveOn +'px';

    if (parseInt(block.style.left) >= getMaxLeftPosition()){
        block.style.left = parseInt(block.offsetLeft) - 20 + `px`;
        textFunction()
    }
}

const onLeftArrowClick = () => {
    block.style.left = block.offsetLeft - moveOn +'px';

    if(parseInt(block.style.left) < 0) {
        block.style.left = parseInt(block.offsetLeft) + 20 + `px`;
        textFunction()
    }
}

const onUpArrowClick = () => {
    block.style.top = block.offsetTop - moveOn +'px';

    if(parseInt(block.style.top) < 0) {
        block.style.top = parseInt(block.offsetTop) + 20 + `px`;
        textFunction()
    }
}

const onDownArrowClick = () => {
    block.style.top = block.offsetTop + moveOn +'px';
   
    if(parseInt(block.style.top) > getMaxTopPosition()) {
        block.style.top = parseInt(block.offsetTop) - 20 + `px`;
        textFunction()
    }
}

const keyBounce = ()=>{
    block.classList.add(`bounce`)
    document.addEventListener(`keyup`, event => block.classList.remove(`bounce`));
};

const keySitDown = ()=>{
    block.classList.add(`sit-down`)
    document.addEventListener(`keyup`, event => block.classList.remove(`sit-down`));
};

function onKey(event) {
    switch (event.key) {
        case "ArrowRight":
            onRightArrowClick();
            break;
        case "ArrowLeft":
            onLeftArrowClick();
            break;
        case "ArrowUp":
            onUpArrowClick();
            break;
        case "ArrowDown":
            onDownArrowClick();
            break;
        case " ":
            keyBounce();
            break;
        case "Control":
            keySitDown();
    }
  
}


window.addEventListener('keydown', onKey);

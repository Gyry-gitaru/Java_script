const square = document.querySelector(`.block`);
square.style.left = 0;
square.style.top = 0;
const maxHeight = window.innerHeight
const maxWidth = window.innerWidth


function randomColorMove (item) {
    setInterval(() => {
        const element = item;

        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

        element.style.background = color;
    }, 500),

    setInterval(() => {
        square.style.top = (parseInt(Math.floor(Math.random() * maxHeight) - square.clientHeight)) + `px`;
        square.style.left = (parseInt(Math.floor(Math.random() * maxWidth) - square.clientWidth)) + `px`;

        if(parseInt(square.style.top) < 0) square.style.top = 0;

    
        if (parseInt(square.style.left) < 0) square.style.left = 0;
        
    }, 1000);

}

randomColorMove(square)





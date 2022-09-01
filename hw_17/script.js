const allLastLi = document.querySelectorAll(`li:last-of-type`);

setTimeout(() => {
    allLastLi.forEach(li => li.classList.add(`last`))}, 2000);


const rootUL = document.querySelector("ul.root");

const setFirstItemClassName = (root, level) => {
    level--;

    if(level >0) {
        let LIs = [...root.children];
        LIs.forEach(li => {
            let innerUl = [...li.children];
            innerUl.forEach(ul => setFirstItemClassName(ul, level));
    })
    } else {
        let liFirst = root.querySelector(`li:first-of-type`);
        setTimeout(() => {
            liFirst.classList.add(`first`)}, 2000);
    }
}

setFirstItemClassName(rootUL, 2);




const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const carBlock = $('#carBlock');
const titleBlock = $(`#color_title`);
const colorBox = $(`#color_box`);

const img = $('<img>');
const p = $('<p></p>');

const renderInitialImage = (item) => {
    img.attr( "src", `https://mc-astro.github.io/tesla-roadster-colors/img/${item[0].img}.jpg`).css({'width': '50%'});
    carBlock.append(img);

    p.text(item[0].title);
    titleBlock.append(p);

    item.forEach(obj => renderColorsBlock(obj));
}

const renderColorsBlock = (box) => {
    const colorDiv = $('<div></div>').addClass('colorDiv').css({'background-color': box.color});
    if(box.color === `#3d7866`) colorDiv.css({'border-bottom': '3px solid #f8a00d'});
    colorBox.append(colorDiv);

    colorDiv.on('click', () => {
        img.attr( "src", `https://mc-astro.github.io/tesla-roadster-colors/img/${box.img}.jpg`);
        p.text(box.title);
    })
}

$.ajax({
	url : URL,
	method: 'GET',
	success: data => renderInitialImage(JSON.parse(data)),
	error: error => console.log(error)
})
const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const carBlock = $(`#carBlock`);
const colorTitle = $(`#color_title`);
const colorBox = $(`#color_box`);
const img = $('<img>');
const p = $('<p></p>');

$.ajax({
	url : URL,
	method: 'GET',
	success: data => {
        let jsonFile = JSON.parse (data);
        jsonFile.forEach(item => renderFunction(item))
        img.attr('src',`https://mc-astro.github.io/tesla-roadster-colors/img/black.jpg`);
    },
	error: error => console.log(error)
})

const renderFunction = (item) => {
    const color = item.color;

    const div = $('<div></div>');
    div.css({
        "background-color": color,
        "width": "25px",
        "height": "35px",
        "margin-bottom": "10px",
        "cursor" : "pointer",
        "border-radius": "2px"
    })
    if(item.color === `#3d7866`){
        div.css({
            'border-bottom': '3px solid #f8a00d'
        })
    }
    colorBox.append(div);

    p.text('Solid Black');
    colorTitle.append(p)
 
    img.css ({
        'width' : '50%'
    })
    carBlock.append(img);


    div.on(`click`, () => {
        img.attr('src',`https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`);
        carBlock.html(img)
        
        p.text(item.title)
        colorTitle.html(p);
      });
} 

  



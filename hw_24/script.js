const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const carBlock = $(`#carBlock`);
const colorTitle = $(`#color_title`);
const colorBox = $(`#color_box`);


$.ajax({
	url : URL,
	method: 'GET',
	success: data => {
        let jsonFile = JSON.parse (data);
        jsonFile.forEach(item => renderFunction(item))
    },
	error: error => console.log(error)
})

const renderFunction = (item) => {

    const color = item.color;

    const div = $('<div></div>');
    div.css({
        "background-color": color,
        "width": "50px",
        "height": "50px",
        "margin-bottom": "10px",
        "cursor" : "pointer",
        "border-radius": "30%"
    })
    colorBox.append(div)

    div.on(`click`, () => {
        let img = $('<img>');
        let src = `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`;
        img.attr("src", src);
        img.css({
            "width": "50%"
        })
        carBlock.html(img)
        
        let p = $('<p></p>').text(item.title)
        p.css({
            "color": "grey"
        })
        colorTitle.html(p);
      });
}









  
  


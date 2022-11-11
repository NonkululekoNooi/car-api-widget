// displaying color
const getColor = document.querySelector(".color");
const getColorTemplete = Handlebars.compile(colr.innerText);
const colored = document.querySelector(".typeOfColors");


axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const colour = result.data;

        carTypesElem.innerHTML = getColorTemplete({
            colour
        })
    })

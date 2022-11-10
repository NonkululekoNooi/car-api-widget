const carsTypesTemplate = document.querySelector('.carsTypesTemplate');
const typeOfCarsTemplate = Handlebars.compile(carsTypesTemplate.innerText);

//all colors
const colorsOfCarsTemplate = document.querySelector('.colorsOfCarsTemplate');
const carColorsTemplate = Handlebars.compile(colorsOfCarsTemplate.innerText);

//car brand
const carBrandsTemplate = document.querySelector('.carBrandsTemplate');
const brandsTemplate = Handlebars.compile(carBrandsTemplate.innerText);


//displaying cars
const carTypesElem = document.querySelector('.vehicles');

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;

        carTypesElem.innerHTML = typeOfCarsTemplate({
            cars
        })
    })

// displaying colors

const colorTypesElem = document.querySelector('.AllColor');
axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const AllColor = result.data;

        colorTypesElem.innerHTML = carColorsTemplate({
            AllColor
        })
    })


//displaying brands

const brandTypesElem = document.querySelector('.AllBrand');
axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const AllBrand = result.data;

        colorTypesElem.innerHTML = brandsTemplate({
            AllBrand
        })
    })

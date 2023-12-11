const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

const products = [
    {
        id: 1,
        title: "Air Max",
        price: 120,
        colors: [
            {
                code: "salmon",
                img: "images/salmon_air_max.png",
            },
            {
                code: "red",
                img: "images/red_air_max.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air 27",
        price: 110,
        colors: [
            {
                code: "pink",
                img: "images/pink_air_27_womens.png",
            },
            {
                code: "crimson",
                img: "images/peach_air_27.png",
            },
        ],
    },
    {
        id: 3,
        title: "Air Force 1",
        price: 100,
        colors: [
            {
                code: "skyblue",
                img: "images/airforce_1_sky_blue.png",
            },
            {
                code: "darkgrey",
                img: "images/airforce_1_dark_grey.png",
            },
        ],
    },
    {
        id: 4,
        title: "Air Jordan",
        price: 130,
        colors: [
            {
                code: "orange",
                img: "images/air_jordan_orange.png",
            },
            {
                code: "red",
                img: "images/air_jordan_red_black.png",
            },
        ],
    },
    {
        id: 5,
        title: "Air Max Classic",
        price: 120,
        colors: [
            {
                code: "lawngreen",
                img: "images/green_air_max_classic.png",
            },
            {
                code: "lightcoral",
                img: "images/pink_air_max_classic.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        // change the surrent slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        chosenProduct = products[index];

        //change title of current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "£" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // assign new colour to colour selectors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=> {
    currentProductImg.src = chosenProduct.colors[index].img;})
});


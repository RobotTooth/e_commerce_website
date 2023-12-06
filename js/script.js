const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

console.log(wrapper);
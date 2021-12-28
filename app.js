window.addEventListener("devicemotion", init)
let items;

function init() {
    console.log("hello world")

    items = Array.from(document.getElementsByClassName("card__item"));
    items.forEach(item => {
        item.addEventListener("click", expand, true)
    });
}


function expand() {
    this.classList.toggle("active")
    items.forEach(elem => {
        elem == this ? null : elem.classList.remove("active")

    })
}

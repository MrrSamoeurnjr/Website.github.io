const filterbuttons = document.querySelectorAll(".filters_buttons button");
const filterablecards = document.querySelectorAll(".filter_cards .card");
console.log( filterbuttons  ,  filterablecards);
const filtercards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target)
    filterablecards.forEach(card => {
        card.classList.add("Samoeurn");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("Samoeurn");
        }
    })
}
filterbuttons.forEach(button => button.addEventListener("click" , filtercards));


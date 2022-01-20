const navToggle = document.querySelector("#btn-menu");
const navMenu = document.querySelector(".nav-menu");

//A addEventListener le indico qué tipo de evento y luego le indico que debe hacer cuando haga ese evento.
navToggle.addEventListener("click", () => { //Cuando le dé click le doy un eventlistener, le paso una función que
    navMenu.classList.toggle("nav-menu_visible"); //va a hacer un Toggle, a la clase que quiero, hace que si está la clase la elimina y, sino, la añade
});


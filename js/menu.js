let menu = document.getElementById("menu");
let clase = document.querySelector("nav__menu");


menu.addEventListener('click', e =>{

  menu.classList.toggle("act");
  store(clase.classList.contains("act"));
});






function myFunction(x) {
  menu.classList.toggle("change-menu");
  x.classList.toggle("change");
}



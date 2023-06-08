const abrirMenu = document.getElementById("botao-menu-mobile");
const menu = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

function mudancaMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const menuAberto = menu.classList.contains("aberto");
    menu.classList.toggle("aberto");
    if (menuAberto) {
        hamburger.classList.remove("fa-xmark");
        hamburger.classList.add("fa-bars");
    } else {
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-xmark");
    };
};
abrirMenu.addEventListener("click", mudancaMenu);
abrirMenu.addEventListener("touchstart", mudancaMenu);
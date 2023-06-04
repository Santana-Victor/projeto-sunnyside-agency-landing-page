const abrirMenu = document.getElementById("botao-menu-mobile");

function mudancaMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const menu = document.getElementById("nav");
    menu.classList.toggle("aberto")
};
abrirMenu.addEventListener("click", mudancaMenu);
abrirMenu.addEventListener("touchstart", mudancaMenu);
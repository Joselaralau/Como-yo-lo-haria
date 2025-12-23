document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("btnmenu");
    const menu = document.getElementById("menu");

    const submenuBtn = document.querySelector(".has-submenu > a");
    const submenu = document.querySelector(".has-submenu .submenu");

    // ABRIR / CERRAR MENÚ MÓVIL
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
    });

    // ABRIR SUBMENÚ EN MÓVIL
    submenuBtn.addEventListener("click", (e) => {
        if (window.innerWidth < 1024) {
            e.preventDefault();
            submenu.classList.toggle("open");
            submenu.parentElement.classList.toggle("open");
        }
    });

});
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});
document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("btnmenu");
    const menu = document.getElementById("menu");

    const submenuBtn = document.querySelector(".has-submenu > a");
    const submenu = document.querySelector(".has-submenu .submenu");

    /* abrir y cerrar el menu en telefono */

    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
    });

    // Abir y cerrar el submenu de computadora 
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


const navBar = document.getElementsByClassName("nav")[0];
const navArrow = document.getElementsByClassName("nav__arrow")[0];
const footer = document.getElementsByClassName("footer-mobile-wrapper")[0];
const menu = document.getElementsByClassName("footer-mobile-menu")[0];
const openMenuBtn = document.getElementsByClassName("open-menu")[0];
const closeMenuBtn = document.getElementsByClassName("close-menu")[0];
const menuLinks = document.querySelectorAll(".footer-mobile-menu__list .menu__item");

menuLinks.forEach(link => link.addEventListener("click", closeMenu));

openMenuBtn.onclick = function () {
    openMenu();
};

closeMenuBtn.onclick = function () {
    closeMenu();
};

function openMenu() {
    navBar.setAttribute(
        "style",
        "position: fixed; top: 0px; left: 0px; right: 0px; z-index: 1;"
    );
    navArrow && navArrow.setAttribute("style", "display: none;");
    footer.setAttribute("style", "background: rgb(88, 38, 228);");
    menu.setAttribute("style", "display: flex; position: fixed;");
    closeMenuBtn.setAttribute("style", "display: block;");
    openMenuBtn.setAttribute("style", "display: none;");
    document.documentElement.setAttribute("style", "overflow: hidden");
}

function closeMenu() {
    navBar.removeAttribute("style");
    navArrow && navArrow.removeAttribute("style");
    footer.removeAttribute("style");
    menu.removeAttribute("style");
    closeMenuBtn.removeAttribute("style");
    openMenuBtn.removeAttribute("style");
    document.documentElement.removeAttribute("style");
}

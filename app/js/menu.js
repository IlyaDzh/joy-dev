const navBar = document.getElementsByClassName("nav")[0];
const footer = document.getElementsByClassName("footer-mobile-wrapper")[0];
const menu = document.getElementsByClassName("footer-mobile-menu")[0];
const openMenuBtn = document.getElementsByClassName("footer-mobile__btn")[0];

openMenuBtn.onclick = function () {
    menu.style.display = "flex";
    menu.style.position = "fixed";
    footer.style.position = "fixed";
    footer.style.left = "0";
    footer.style.right = "0";
    footer.style.bottom = "0";
    footer.style.zIndex = "1";
    footer.style.background = "#5826e4";
    navBar.style.position = "fixed";
    navBar.style.top = "0";
    navBar.style.left = "0";
    navBar.style.right = "0";
    navBar.style.zIndex = "1";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
};

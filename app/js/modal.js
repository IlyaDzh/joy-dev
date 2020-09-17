const modal = document.getElementById("call-modal");
const openBtn = document.getElementById("call-btn");
const closeBtn = document.getElementById("call-close");

openBtn.onclick = function () {
    modal.style.visibility = "visible";
    modal.style.pointerEvents = "auto";
    modal.style.opacity = 1;
};

closeBtn.onclick = function () {
    modal.style.visibility = "invisible";
    modal.style.pointerEvents = "none";
    modal.style.opacity = 0;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.visibility = "invisible";
        modal.style.pointerEvents = "none";
        modal.style.opacity = 0;
    }
};

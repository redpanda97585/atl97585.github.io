const bodyElement = document.body;
// const mainContainer = document.querySelector(".main-container");
mode = false;
document.querySelector(".style-button").onclick = function () {
    if (mode === false) {
        bodyElement.style.background = "black";
        bodyElement.style.color = "white";
        // mainContainer.style.display = "flex";
        mode = true;
    } else {
        bodyElement.style.background = "white";
        bodyElement.style.color = "black";
        // mainContainer.style.display = "inline";
        mode = false;
    }
}
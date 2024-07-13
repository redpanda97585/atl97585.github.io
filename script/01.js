const UVM = 9;
const CS = 48;

// let csPer = document.querySelector(".ossu");
// let csCompleted = 3;
// let csTotal = Math.round((( csCompleted / 48) * 100)* 100 )/100;

/**
 * This feature changes the background and color of the page 
 * when clicking an assigned button (.style-button) in the html file
 * using an event listener. 
 * The feature changes to "light-mode" or "dark-mode" every time 
 * it is clicked.
*/

const bodyElement = document.querySelector("body");
const styleButton = document.querySelector(".style-button");
let mode; 

console.log(bodyElement);

styleButton.addEventListener("click", () => {
    if (mode == "darkMode") {
        bodyElement.style.background = "white";
        bodyElement.style.color = "black";
    } else {
        bodyElement.style.background = "black";
        bodyElement.style.color = "white";
        mode = "darkMode";
    } 
});


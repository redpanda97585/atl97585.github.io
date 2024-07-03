const UVM = 9;
const CS = 48;

let csPer = document.querySelector(".ossu");
let csCompleted = 3;
let csTotal = Math.round((( csCompleted / 48) * 100)* 100 )/100;

let bodyElement = document.body;
let mainContainer = document.querySelector(".main-container");
let mode = false;

csPer.innerHTML = csTotal.toString() + "%";
console.log(csTotal);

document.querySelector(".style-button").onclick = function () {
    if (mode === false) {
        bodyElement.style.background = "black";
        bodyElement.style.color = "white";
        mode = true;
    } else {
        bodyElement.style.background = "white";
        bodyElement.style.color = "black";
        mode = false;
    }
}


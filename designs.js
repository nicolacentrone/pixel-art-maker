/**
* Author: Nicola Centrone
* e-mail: nicola.centrone.it@gmail.com
*/

var canvasHeight;
var canvasWidth;
var pickedColor;
var inputHeight;
var inputWidth;

// listener for the height input
function catchHeight(event) {
  canvasHeight = event.target.value;
}

// listener for the width input
function catchWidth(event) {
  canvasWidth = event.target.value;
}


/**
* Used a nested loop to generate the grid with the use of the .insertRow and
* .insertCell methods of HTMLTableElement
*/

function makeGrid(event) {
  event.preventDefault();
  const table = document.querySelector("table");
  for (let r = 0; r < canvasHeight; r++) {
    const row = table.insertRow(r);
    row.setAttribute("class", "row");
    for (let c = 0; c < canvasWidth; c++) {
      const cell = row.insertCell(c);
      cell.setAttribute("class", "cell");
      cell.addEventListener("click", updateColor, false);
    }
  }
}

// Sets the picked color when a cell is clicked
function updateColor(event) {
  event.target.style.background = pickedColor;
}

// Sets pickedColor as the new color picked
function setColor(event) {
  pickedColor = event.target.value;
}

function setDefaultColor(event) {
  const defaultColor = "#000000";
  pickedColor = defaultColor;
}

// listens for input values
inputHeight = document.querySelector("#input_height");
inputWidth = document.querySelector("#input_width");
inputHeight.addEventListener("input", catchHeight, false);
inputWidth.addEventListener("input", catchWidth, false);

// listen for submit to create the grid
document.querySelector("#submit_button").addEventListener("click", makeGrid, false);

// sets black color when DOM is loaded
document.addEventListener("DOMContentLoaded", setDefaultColor, false);

// listen for the color picker
document.querySelector("#colorPicker").addEventListener("input", setColor, false);

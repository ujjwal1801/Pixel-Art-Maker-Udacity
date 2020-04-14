// Select color input
let colorPicker = document.getElementById("colorPicker")
let selectedColor = colorPicker.value;
colorPicker.onchange = () => selectedColor = colorPicker.value;


// Select size input
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");


// Select Canvas table
let canvas = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()
function makeGrid(e) {

    e.preventDefault(); // Preventing the default submit functionality of the form element
    canvas.innerHTML = '' // Clearing the table
    for (let i = 0; i < inputHeight.value; i++) {
        let row = canvas.insertRow(i); // Inserting a row in the table inside the loop according to the height
        for (let j = 0; j < inputWidth.value; j++) {
            let cell = row.insertCell(j); // Inserting a row in the table inside the loop according to the height
            cell.onclick = () => {
                cell.style.backgroundColor = selectedColor; // Setting the background color of the cell
            }
        }
    }

}
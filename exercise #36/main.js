const colorPicker = document.querySelector('#colorPicker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistoryColor = document.querySelector('#clearHistoryColor');


    colorPicker.addEventListener("input", function() {
    const selectedColor = colorPicker.value;
    colorPreview.style.backgroundColor = selectedColor;
    addColorToHistory(selectedColor);
});
function addColorToHistory(color) {
    const li = document.createElement('li');
    li.textContent = color;
    li.style.color = color;
    colorHistory.appendChild(li);
}
clearHistoryColor.addEventListener('click', function() {
    colorHistory.innerHTML = "";
});

// const colorPicker = document.querySelector("#colorpicker");
// const colorPreview = document.querySelector("#colorpreview");
// const colorHistory = document.querySelector("#colorhistory");
// const clearHistoryButton = document.querySelector("#clearhistoryButton");

// // Check if the elements exist before attaching event listeners
// if (colorPicker && colorPreview && colorHistory && clearHistoryButton) {
//     // Event listener for color changes
//     colorPicker.addEventListener("input", function() {
//         const selectedColor = colorPicker.value;
//         colorPreview.style.backgroundColor = selectedColor;
//         addColorToHistory(selectedColor);
//     });

//     // Function to add the selected color to the history
//     function addColorToHistory(color) {
//         const li = document.createElement("li");
//         li.textContent = color;
//         li.style.color = color;
//         colorHistory.appendChild(li);
//     }

//     // Event listener for clearing history
//     clearHistoryButton.addEventListener("click", function() {
//         colorHistory.innerHTML = ""; // Clear the color history list

//     });
// };

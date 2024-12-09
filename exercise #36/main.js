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


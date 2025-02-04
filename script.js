const button = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu');
const textArea = document.getElementById("textArea");

// Dropdown show/hide toggle
button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Dropdown close 
document.addEventListener('click', (e) => {
    if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// Toggle Font Family (Dropdown se)
function changeFont(font) {
    textArea.style.fontFamily = font; 
    button.innerHTML = font + ' <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>';
    menu.classList.add('hidden'); 
}

// Toggle Normal (Reset all styles)
function setNormal() {
    textArea.style.fontWeight = 'normal';
    textArea.style.fontStyle = 'normal';
    textArea.style.textDecoration = 'none';
    textArea.style.color = 'black';
    textArea.style.fontFamily = 'initial';
    textArea.style.fontSize = '16px'; // Default size
}

// Toggle Bold
function setBold() {
    textArea.style.fontWeight = textArea.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

// Toggle Italic
function setItalic() {
    textArea.style.fontStyle = textArea.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

// Toggle Underline
function setUnderline() {
    textArea.style.textDecoration = textArea.style.textDecoration === 'underline' ? 'none' : 'underline';
}

// Toggle Text Color
function changeTextColor() {
    let color = document.getElementById("colorPicker").value;
    textArea.style.color = color;
}

// Toggle Font Size
function changeFontSize() {
    let fontSize = document.getElementById("fontSizeInput").value + "px";
    textArea.style.fontSize = fontSize;
}

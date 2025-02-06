const button = document.getElementById('dropdownButton');
const menu = document.getElementById('dropdownMenu');
const textArea = document.getElementById("textArea");

// Show/Hide font dropdown menu
button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Hide menu if clicked outside
document.addEventListener('click', (e) => {
    if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// Change font family of all text
function changeFont(font) {
    textArea.style.fontFamily = font;
    button.innerHTML = font + ' <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>';
    menu.classList.add('hidden');
}

function setNormal() {
    // Reset all inline styles
    textArea.style.fontWeight = 'normal';
    textArea.style.fontStyle = 'normal';
    textArea.style.textDecoration = 'none';
    textArea.style.fontFamily = 'initial';
    textArea.style.fontSize = '16px'; // Default size
    textArea.style.color = 'black';  // Default color
}

// Set text to bold
function setBold() {
    document.execCommand('bold');
}

// Set text to italic
function setItalic() {
    document.execCommand('italic');
}

// Set text to underline
function setUnderline() {
    document.execCommand('underline');
}

// Change text color
function changeTextColor() {
    const color = document.getElementById("colorPicker").value;
    document.execCommand('foreColor', false, color);
}

// Change font size
function changeFontSize() {
    let fontSize = document.getElementById("fontSizeInput").value + "px";
    textArea.style.fontSize = fontSize;
} 

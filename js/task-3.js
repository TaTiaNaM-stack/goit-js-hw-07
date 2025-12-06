const textInput = document.querySelector('#name-input');
const charCount = document.querySelector('#name-output');
textInput.addEventListener('input', () => {
    charCount.textContent = textInput.value.trim() === '' ? 'Anonymous' : textInput.value.trim();
});



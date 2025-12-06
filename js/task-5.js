const colorBackground = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const colorValueDisplay = document.querySelector('.color');
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  colorBackground.style.backgroundColor = newColor;
  colorValueDisplay.textContent = newColor;
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

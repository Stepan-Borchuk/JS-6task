const changeColorClick = document.querySelector('.change-color');
changeColorClick.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.querySelector('.color').textContent = color;
  document.querySelector('body').style.backgroundColor = color;
}
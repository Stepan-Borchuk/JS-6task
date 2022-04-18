const box = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxList = [];

for (let index = 0; index < amount; index++) {
   const boxSize = 30 + 10 * index;
  const listItem = document.createElement('div');
  listItem.classList.add('boxes');
listItem.style.height = `${boxSize}px`;
listItem.style.width = `${boxSize}px`;
  listItem.style.backgroundColor = `${getRandomHexColor()}`;
  boxList.push(listItem)
}
  box.append(...boxList)
}

document.querySelector('button[data-create]').addEventListener('click', onCreateClick)


document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes)


function destroyBoxes() {
  box.innerHTML =''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onCreateClick() {
  createBoxes(document.querySelector('input').value)
}
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

// const amount = 25;

// function onCreateClick() {
//   createBoxes(amount)
// }


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

//  ;

// function onInputChange(event) {
//   return (event.currentTarget.value)

// }
// const amuontBoxes = document.querySelector('input')
// const amount =
//   document.querySelector('input').addEventListener('input', onInputChange)

// function onInputChange(event) {
//   return event.currentTarget.value
//   }   

// // const a = onInputChange();
    
// // console.log(b)

// //  console.dir(amount)

// const amount = 10;


// // працює



// // const input = document.querySelector('input').value
// document.querySelector('input').value = 100
// // console.log(input)


// const listItem = document.createElement('div');
// listItem.style.marginTop = '30px';
// listItem.style.marginRight = '30px'
// listItem.style.height = '30px';
// listItem.style.width = '30px';
// listItem.style.backgroundColor = `${getRandomHexColor()}`
// // return listItem
// console.log(listItem) 
// box.append(listItem)


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// // працює

// document.querySelector('input').getAttribute(value)
// console.log(document.querySelector('input').textContent) 

// const a = document.querySelector('input').addEventListener('input', onInputChange);

// const a=[];

// const input = document.querySelector('input')



// box.insertAdjacentHTML("afterbegin", listItems)


// const box = document.querySelector('#boxes');

// const listItem = document.createElement('div');
// listItem.style.marginTop = '30px';
// listItem.style.marginRight = '30px'
// listItem.style.height = '30px';
// listItem.style.width = '30px';
// listItem.style.backgroundColor = `${getRandomHexColor()}`;
// console.log(listItem);
// box.append(listItem)





   
// console.log(document.querySelector('input').addEventListener('input', onInputChange))
// console.log(tempText)

// document.querySelector('button[data-create]').addEventListener('click', onCreateClick)

// function onCreateClick() {


  
// console.log(document.querySelector('button[data-create]'))


// function createBox(amount) {
//   for (let index = 0; index < amount; index++) {
//     // box.createElement('div');
    
//     // box.style.heigth = '30 + ${i} * 10';
//     // box.style.width = '30 + ${i} * 10'
//     console.log('цикл')
//     // console.log(box)
//   }
// }

// console.log(amount)





// console.log(createBox(amount))
  
//

// function greet(name) {
//   (`Ласкаво просимо ${name}.`)
//     return;
// }

// // Функція вищого порядку
// function registerGuest(name) {
//   (`Реєструємо гостя ${name}.`);
//   greet(name)
//     return;
// }

// registerGuest("Манго");

// console.log(registerGuest)



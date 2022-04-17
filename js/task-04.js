const counterValue = document.querySelector('#value');
const buttonPressScale = 1;
counterValue.textContent = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
    counterValue.textContent -=  buttonPressScale
});


const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + buttonPressScale
});

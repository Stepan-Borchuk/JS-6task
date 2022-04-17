const refs = {
    buttonName: document.querySelector('#name-output'),
    inputName: document.querySelector('#name-input')
}

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.buttonName.textContent = event.currentTarget.value; 
}

// refs.inputName.addEventListener('blur', onInputBlur);

// // console.log(input)

// function onInputBlur() {
//     console.log(refs.inputName.value ) 

// }
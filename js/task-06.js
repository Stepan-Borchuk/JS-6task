const inputValidator = document.querySelector('#validation-input')

console.log(inputValidator.dataset.length)

inputValidator.addEventListener('blur', onBlurEvent)

function onBlurEvent() {
     if (inputValidator.value.length === inputValidator.dataset.length) {
        inputValidator.classList.remove('invalid')
        inputValidator.classList.add('valid')
    } else {
        inputValidator.classList.remove('valid')
        inputValidator.classList.add('invalid')
    } 
 }
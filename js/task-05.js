const refs = {
    buttonName: document.querySelector('#name-output'),
    inputName: document.querySelector('#name-input')
}

refs.inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    // refs.buttonName.textContent = event.currentTarget.value; 
  
    refs.buttonName.textContent = event.currentTarget.value;

    if (refs.buttonName.textContent =='') {
        refs.buttonName.textContent = 'Anonymous';
    }
}



// refs.inputName.addEventListener('blur', onInputBlur);

// // console.log(input)


    // console.log(`${refs.buttonName.textContent}`) 

// }
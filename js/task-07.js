const fontSizeValue = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

fontSizeValue.addEventListener('click', onRangePositionChange)

function onRangePositionChange(event) {
    console.log(event.currentTarget.value);
    textSize.style.fontSize = `${event.currentTarget.value}px`;
    
}


document.querySelectorAll( '.item' )
    .forEach( item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        // console.log(`Elements: ${item.lastElementChild.length}`)
        console.log(item.lastElementChild)
    })


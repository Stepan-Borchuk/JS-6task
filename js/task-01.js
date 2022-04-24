document.querySelectorAll( '.item' )
    .forEach( item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        // console.log(`Elements: ${item.querySelectorAll('li')}`)
        console.log(`Elements: ${item.lastElementChild.children.length}`)
        // console.log(item.lastElementChild.children.length);
        // console.log(item.querySelectorAll('li'));
    })


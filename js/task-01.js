document.querySelectorAll( '.item' )
    .forEach( item => {
        console.log( `Category: ${item.querySelector('h2').textContent}Elements: ${item.querySelectorAll('li').length}` )
    } )

const task3Result = document.querySelector('.gallery');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listItems = images.map(image => {
//   const {url, alt} = image;
//   const listItemClass = 'gallery-item';
//   const listItem = document.createElement('li');
//   const listItemImage = document.createElement('img');
//   listItemImage.classList.add(listItemClass);
//   listItemImage.src = url;
//   listItemImage.alt = alt;
//   listItemImage.width = 750;
  
//   listItem.appendChild(listItemImage)

//   return listItem
// });
// task3Result.append(...listItems);


const listItems = images
  .map(images => `<li class = "gallery-item"><img src=${images.url} alt = ${images.alt} width = 750 ></li>`)
  .join("")

task3Result.insertAdjacentHTML("afterbegin", listItems)
const task2Result = document.querySelector('#ingredients');


const ingredients = [
  'Potatoes'
  , 'Mushrooms'
  , 'Garlic'
  , 'Tomatos'
  , 'Herbs'
  , 'Condiments'
  ,];


const listItems = ingredients.map(ingredient => {
  const listItemClass = 'item';
  const listItem = document.createElement('li');
  listItem.classList.add(listItemClass);
  listItem.textContent = ingredient
  return listItem
});
task2Result.append(...listItems);

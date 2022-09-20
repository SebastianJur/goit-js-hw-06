const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

for (let ingredient of ingredients) {
  const ingredientElement = document.createElement('li');
  ingredientElement.innerText = ingredient;
  ingredientElement.classList.add('item');
  ingredientsList.appendChild(ingredientElement);
}
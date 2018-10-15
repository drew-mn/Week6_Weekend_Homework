document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const listItem = createListItem(event.target);
  const list = document.querySelector('#most-valuable');
  list.appendChild(listItem);

  event.target.reset();


}

const createListItem = function (form) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');

  const team_name = document.createElement('h2');
  team_name.textContent = form.team_name.value;
  listItem.appendChild(team_name);

  const country = document.createElement('h3');
  country.textContent = form.country.value;
  listItem.appendChild(country);

  const revenue = document.createElement('p');
  revenue.textContent = form.revenue.value;
  listItem.appendChild(revenue);
  return listItem;
}

const handleDeleteAllClick = function (event) {
  const list = document.querySelector('#most-valuable');
  while (list.firstChild) {list.removeChild(list.firstChild)}

}

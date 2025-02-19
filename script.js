const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler); // creates the event listener that triggers when user types

function search(str) {
  let results = []; // Creates empty string for results
  const lowercaseInput = str.toLowerCase(); // changes the input to all lowercase
  const fruitResults = fruit.filter(function (val) {
    return val.toLowerCase().includes(lowercaseInput);
  });
  return fruitResults;
}

function searchHandler(e) {
  const searchInput = e.target.value;
  const searchResults = search(searchInput);

  if (searchResults.length === 0) {
    suggestions.innerText = 'No results found';
    suggestions.parentElement.style.display = 'block';
    return;
  } // For if no matches are found

  if (searchInput === '') {
    suggestions.innerText = '';
    return;
  } //removes dropdown when input field is cleared
  showSuggestions(searchResults);
}

function showSuggestions(results, inputVal) {
  suggestions.innerText = ''; // clear previous suggestions
  suggestions.parentElement.style.display = 'block';
  suggestions.classList.add('has-suggestions'); // add class list to search/list item(s)
  results.forEach(result => {
    const li = document.createElement('li');  // create li element for resulting fruit
    li.textContent = result; // places fruit result into created li
    suggestions.appendChild(li); // appends result to suggestions ul
  });
}

function useSuggestion(e) {
  input.value = e.target.textContent; // Replace input field with selection
  suggestions.innerText = ''; // Clears suggestions once a result is selected
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
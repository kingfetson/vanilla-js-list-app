// Select elements
const addButton = document.getElementById('add-button');
const inputText = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

// Function to add item
function addItem() {
    const value = inputText.value.trim(); // Get input value and remove leading/trailing spaces
    if (value !== '') {
        const listItem = document.createElement('li'); // Create new list item
        listItem.textContent = value; // Set text to input value
        listContainer.appendChild(listItem); // Append to the list
        inputText.value = ''; // Clear the input field
    }
}

// Add event listener to the button
addButton.addEventListener('click', addItem);

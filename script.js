// Select the element with id "level"
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree
while (element) {
    level++; // Count each parent level
    element = element.parentElement; // Move to parent element
}

// Display the result
alert(`The level of the element is: ${level}`);

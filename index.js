// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuItems = document.getElementById("menu");
    let menuContent = '';
    // Loop through each category and its items in the menu object
    for(const [category, items] of Object.entries(menu)){
        menuContent += `<h2>${category}</h2>`;
        menuContent += '<ul>'
            items.forEach(items => {
                menuContent += `<li>${items}</li>`;
                menuItems.addEventListener('click', () => {addToOrder(itemName)})
            });
        menuContent += '</ul>';
    }
    menuItems.innerHTML = menuContent;
        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    let orderItems = document.getElementById("order-items");
    let orderTotal = document.getElementById("order-total");
    let price = 100;
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

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

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    let orderItems = document.getElementById('order-items');
    let orderTotal = document.getElementById('order-total');
    let price = 100;
    let orderContent = '';

    // Create a list item for the order
    orderContent += '<li>'

    const currentTotal = price + price;
    currentTotal.innerHTML = orderTotal.toFixed(2);

    orderItems.innerHTML = orderContent;
    orderTotal.innerHTML = orderContent;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
    addToOrder(itemName);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

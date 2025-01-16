function toggleCommands(event) {
    const clickedItem = event.currentTarget;
    const dropdown = clickedItem.nextElementSibling;

    // Toggle the 'active' class
    dropdown.classList.toggle('active');

    // Animate the dropdown
    if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null; // Collapse
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Expand
    }
}
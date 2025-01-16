document.addEventListener('DOMContentLoaded', function() {
    // Select all command category headers
    const commandHeaders = document.querySelectorAll('.command-category h3');

    commandHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const dropdown = this.nextElementSibling; // Get the corresponding dropdown

            // Toggle the 'active' class
            dropdown.classList.toggle('active');

            // Animate the dropdown
            if (dropdown.style.maxHeight) {
                dropdown.style.maxHeight = null; // Collapse
            } else {
                dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Expand
            }
        });
    });
});

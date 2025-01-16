document.addEventListener('DOMContentLoaded', function() {
    const commandHeaders = document.querySelectorAll('.command-category h3');

    commandHeaders.forEach(header => {
        header.addEventListener('click', function(event) {
            const dropdown = this.nextElementSibling;

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

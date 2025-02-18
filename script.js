    document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".command-category h3");

    categories.forEach((category) => {
        category.addEventListener("click", function () {
            const dropdown = this.nextElementSibling;

            if (dropdown.classList.contains("active")) {
                dropdown.classList.remove("active");
            } else {
                document.querySelectorAll(".dropdown").forEach((d) => d.classList.remove("active"));
                dropdown.classList.add("active");
            }
        });
    });
});
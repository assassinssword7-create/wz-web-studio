// WZ Web Studio

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Simple page-load animation
    document.body.classList.add("loaded");

    console.log("WZ Web Studio portfolio loaded successfully.");
});

document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on page load
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease-in-out";
        document.body.style.opacity = 1;
    }, 100);

    // Smooth transition when clicking a button
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation
            let link = this.href;

            // Fade out effect before navigating
            document.body.style.transition = "opacity 0.5s ease-in-out";
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.open(link, "_blank"); // Opens the link in a new tab
                document.body.style.opacity = 1; // Reset opacity for smoothness
            }, 500);
        });
    });
});

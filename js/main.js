document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");

    // ---------------------------------------------
    // Load saved theme
    // ---------------------------------------------

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }


    // ---------------------------------------------
    // Update button
    // ---------------------------------------------

    function updateThemeButton() {

        if (!themeToggle) {
            return;
        }

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "Light Mode";

        } else {

            themeToggle.textContent = "Dark Mode";

        }
    }


    // Set the correct button text when page loads

    updateThemeButton();


    // ---------------------------------------------
    // Dark / Light mode
    // ---------------------------------------------

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");


            const isDark =
                document.body.classList.contains("dark-mode");


            if (isDark) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }


            updateThemeButton();

        });

    }

});
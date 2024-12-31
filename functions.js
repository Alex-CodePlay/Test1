function filterGames() {
    const filterValue = document.getElementById("filter").value; // Get selected filter value
    const gameCards = document.querySelectorAll(".game-card"); // Select all game cards

    // Loop through all cards and toggle visibility based on the filter
    gameCards.forEach((card) => {
        const genres = card.getAttribute("data-genre").split(" "); // Split genres into an array

        if (filterValue === "all" || genres.includes(filterValue)) {
            card.style.display = "block"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    });

    // If no cards match the filter, show a "no results" message
    const visibleCards = Array.from(gameCards).filter((card) => card.style.display === "block");
    const grid = document.querySelector(".games-grid");

    // Remove existing "no results" message
    const noResultsMessage = document.querySelector(".no-results-message");
    if (noResultsMessage) noResultsMessage.remove();

    // Add "no results" message if no cards are visible
    if (visibleCards.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No games found for the selected genre.";
        message.className = "no-results-message";
        message.style.color = "#fff";
        message.style.textAlign = "center";
        grid.appendChild(message);
    }
}

// JavaScript to toggle the hamburger menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});
const searchBoxElements = document.getElementsByClassName('search-box');
const countryCards = document.querySelectorAll('.country-card');





const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();

    // Loop through each country card
    countryCards.forEach(card => {
        const countryName = card.textContent.toLowerCase();

        // Show card if it matches search, hide if not
        if (countryName.includes(searchText)) {
            card.style.display = 'flex';   // or 'flex' depending on your layout
        } else {
            card.style.display = 'none';
        }
    });
});




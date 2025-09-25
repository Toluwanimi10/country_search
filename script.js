

const countries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cape Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo (Kinshasa)",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Ivory Coast",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe"
];

countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-card';
    card.textContent = country;
document.getElementById('country-list').appendChild(card);
});


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




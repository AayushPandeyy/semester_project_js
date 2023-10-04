// movie.js

const apiKey = '04c35731a5ee918f014970082a0088b1'; // Replace with your TMDb API key
const movieDetailsSection = document.getElementById('movie-details');


// const movieId = urlParams.get('movieId');
localStorage.getItem('movieId');

if (movieId) {
    // Fetch movie details using TMDb API
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(movie => {
            // Display movie details on the page
            movieDetailsSection.innerHTML = `
                <h2>${movie.title}</h2>
                <p>Rating: ${movie.vote_average}</p>
                <p>Overview: ${movie.overview}</p>
                <!-- Add more details as needed -->
            `;
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

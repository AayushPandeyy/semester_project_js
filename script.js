const apiKey = '04c35731a5ee918f014970082a0088b1'; // Replace with your TMDb API key

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsSection = document.getElementById('results');

// Existing code...



// Add event listeners for other links as needed

// Existing code...


searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query === '') {
        alert("Enter a movie name.");
    }

    // Fetch movie data from TMDb API
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            resultsSection.innerHTML = '';

            if (data.results.length === 0) {
                
                resultsSection.innerHTML = '<p>No results found</p>';
            } else {
                
                data.results.forEach(movie => {
                    
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie');

                    const posterPath = movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : 'no-poster.jpg'; // Provide a placeholder image

                    movieElement.innerHTML = `
                        <img src="${posterPath}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                        <p>Release Date: ${movie.release_date}</p>
                        
                        <p> ${movie.id}</p>
                    `;
                    

                    resultsSection.appendChild(movieElement);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Existing code...

resultsSection.addEventListener('click', (event) => {
    const movieElement = event.target.closest('.movie');
    console.log(movieElement);
    if (!movieElement) return;
    

    const movieId = movieElement.getAttribute('movie.id');
    localStorage.setItem('movie-id', movieElement.id);
});

// Existing code...


const apiKey = '04c35731a5ee918f014970082a0088b1'; 

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsSection = document.getElementById('results');




searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query === '') {
        alert("Enter a movie name.");
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            resultsSection.innerHTML = '';

            if (data.results.length === 0) {
                
                resultsSection.innerHTML = '<p>No results found</p>';
            } else {
                
                data.results.forEach(movie => {
                    
                    const movieElement = document.createElement('div');
                    movieElement.classList.add('movie-card');

                    

                    movieElement.innerHTML = `
                       

                                <img class="movie-poster" src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="Movie Poster">
                                <div class="movie-info">
                                <h2 class="movie-title">${movie.title}</h2>
                                
                                <p class="movie-release-date">Release Date: ${movie.release_date}</p>
                                <p class="movie-description">
                                    ${movie.overview}
                                </p>
                                <p class="movie-rating">Rating : ${movie.vote_average} (${movie.vote_count})</p>
                                </div>
                    `;
                    

                    resultsSection.appendChild(movieElement);
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});




async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b03b4d78e4msh7799f943f00bbd0p1d9169jsn429773131fb1',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
       displayMovies(result);
    } catch (error) {
        console.error(error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies");
    let html = "";
    movies.forEach(movie => {
        const tarjeta = `
        <div class="col-md-3">
            <div class="card">
                <img src="${movie.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p>${movie.description}</p>
                </div>
            </div>
        </div>    
        `;
        html += tarjeta;
    });
    moviesContainer.innerHTML = html;
}


fetchMovies();
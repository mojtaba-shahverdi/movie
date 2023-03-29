const showMovies = (e) => {
    let titleMovie = document.getElementById('title').value
    let movieAPI = `http://www.omdbapi.com/?t=${titleMovie}&apikey=b289cc10`
    fetchAPI(movieAPI)
}

const fetchAPI = async(url) => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        showMovie(result)
    } catch (error) {
        console.log('error', error)
    }
}
const showMovie = (movies) => {
    document.getElementById('show-movies').innerHTML = `
    <div class="container-show">
        <img class="img" src="${movies.Poster}">
        <div class="description">
            <h1 class="title">${movies.Title}</h1>
            <div class="YRL"> 
                <h3 class="year">${movies.Year}</h3>
                <h3 class="runtime"> ${movies.Runtime}</h3>
                <h3 class="language"> ${movies.Language}</h3>
                <h3 class="rate">Rate: ${movies.Rated}</h3>
            </div>
            <h3 class="genre"><span class="genre1"><span class="titles">Genre:</span> ${movies.Genre}</span></h3>
            <h3 class="director"><span class="titles">Director:</span> ${movies.Director}</h3>
            <h3 class="actors"><span class="titles">Actors:</span> ${movies.Actors}</h3>
            <h3 class="plot"><span class="titles">Plot:</span> ${movies.Plot}</h3>
            <h3 class="country"><span class="titles">Country:</span> ${movies.Country}</h3>
            <h3 class="awards"><span class="titles">Awards:</span> ${movies.Awards}</h3>
        </div>
    </div>
            
    `
}
import React from 'react';


function Movie(props) {
    return (
        <span>
            <i className={`movie-${props.genre}`}></i>
            <span className="movieTitle">{props.title}</span>&nbsp;
            <span className="genre">{props.genre}</span>
        </span>
    )
}

function MovieCategories(props) {
    return (
        <div className="movieCategories">
            <div>All</div>
            <div>Comedy</div>
            <div>Sci-Fi</div>
        </div>
    )
}




function Movies() {
    return (
        <div>
            <h3>My Favorite Movies</h3>
            <MovieCategories />
            <ul>
                <li><Movie title="The Matrix" genre="sci-fi" /></li>
                <li><Movie title="Gremlins" genre="comedy" /></li>
            </ul>
        </div>
    )
}

export default Movies;
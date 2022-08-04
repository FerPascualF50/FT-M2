export function addMovieFavorite(payload) {
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload 
    }
}
  
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=583cf928&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(imdbID) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=583cf928&i=${imdbID}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'GET_MOVIE_DETAIL',
                payload: data
            })
        })
        .catch(e => {
            console.log(e)
        })
    }
}

// Componente --> store.dispatch(removeMovieFavorite(id)) --> Reducer --> modifico Store/state/estado/estados

// btn --> store.dispatch(removeMovieFavorite(id))

export function removeMovieFavorite(imdbID) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: imdbID
    }
}
  
import {Movie} from "./Movie" 

function MoviesList (props) {
    const {movies = []} = props;

    return <div className = "movie">
        {movies.length ?  movies.map (movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )): <h3>Nothing found</h3>
        }
    </div>
}

export {MoviesList}
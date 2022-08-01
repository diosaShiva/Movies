function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: imdbID,
        Type: type,
        Poster: poster
    } = props

    return( 
            <div id={imdbID} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                <img className = "activator" src={poster}/>
                </div>
                <div className = "card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
                </div>   
            </div>)
}

export {Movie}
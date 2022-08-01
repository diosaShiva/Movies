import React from "react"

class Search extends React.Component {

    state = {
        search: "",
        type: "all"
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies (this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies (this.state.search, this.state.type);
        });
        
    }
    render () {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="row">
                    <div className="input-field input-search">
                        <input 
                            type="search" 
                            placeholder="Movie Name"
                            className="validate"
                            value={this.state.search}
                            onChange={(event)=>this.setState({search: event.target.value})}
                            onKeyDown = {this.handleKey}
                        />
                    </div>
                    <button className = "btn indigo lighten-3 search-btn" onClick = {() => this.props.searchMovies (this.state.search, this.state.type)}>Search</button>
                    </div>
                    <div>
                        <p>
                        <label className="radio-filter-serch">
                            <input 
                                className="with-gap" 
                                name="type" 
                                type="radio"  
                                data-type = "movie" 
                                onChange = {this.handleFilter}
                                checked={this.state.type === "movie"}/>
                            <span>Movies</span>
                        </label>
                        <label className="radio-filter-serch">
                            <input 
                                className="with-gap radio-filter-serch" 
                                name="type" 
                                type="radio"  
                                data-type = "series" 
                                onChange = {this.handleFilter}
                                checked={this.state.type === "series"}/>
                            <span>Series</span>
                        </label>
                        <label className="radio-filter-serch">
                            <input 
                                className="with-gap radio-filter-serch" 
                                name="type" 
                                type="radio"  
                                data-type = "all" 
                                onChange = {this.handleFilter}
                                checked={this.state.type === "all"}/>
                            <span>All</span>
                        </label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export {Search}
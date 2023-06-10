import React, { Fragment } from "react";

let Search =()=>{
    return(
        <Fragment>
            <form className="form-inline">
            <label>Search:
            <input type="text" className="form-control"/>
            </label>
            <button type="submit" className="btn btn-primary">Search</button>
            </form>
        
        </Fragment>
    )
}

export default Search;
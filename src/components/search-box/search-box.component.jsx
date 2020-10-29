import React from 'react';

import './search-box.style.css';

export const SearchBox = (props) => {
    const inputBoxSize = {
        height: "40px",
        borderRadius: "6px"
    }
    return(
        <React.Fragment>
            <input 
            style={inputBoxSize}
            type="search" 
            placeholder={props.placeholder} 
            onChange={props.handleChange}/>
        </React.Fragment>
    );
}
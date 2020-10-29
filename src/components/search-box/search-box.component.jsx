import React from 'react';

import './search-box.style.css';

export const SearchBox = (props) => {
    return(
        <React.Fragment>
            <input 
            type="search" 
            placeholder={props.placeholder} 
            onChange={props.handleChange}/>
        </React.Fragment>
    );
}
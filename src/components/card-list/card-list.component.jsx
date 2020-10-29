import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

const CardList = (props) => {
    return(
        <>
        <div className="card-list">
                {
                    props.monsters.map((monster, ind) => {
                        return (
                            <h1 key={ind} id={ind}>
                                <Card monster= {monster}/>
                            </h1>
                        )
                    })
                }
            </div>
        </>
    );
}

export default CardList;
import React from 'react';

const News = (props)=>{
    return(
        <div>
            <h2>{props.frett.title}</h2><br/>
            <img src={props.frett.photo}/>
        </div>
    )
}

export default News; 
import React from 'react';

const Card = ({confirmed, deaths, recovered}) =>{
    return (
        <div className="card-container">
            <p>{confirmed}</p>
            <p>{deaths}</p>
            <p>{recovered}</p>
        </div>
    )
}

export default Card;
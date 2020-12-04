import React from 'react';

const Card = ({confirmed, recovered,deaths}) =>{
    return (
        <div className="card-container">
            <p>Confirmed:{confirmed}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
        </div>
    )
}

export default Card;
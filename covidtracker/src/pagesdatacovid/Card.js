import React from 'react';

const Card = ({provinsi, kasusPositif,kasusSembuh}) =>{
    return (
        <div className="card-container">
            <p>provinsi:{provinsi}</p>
            <p>kasusPositif: {kasusPositif}</p>
            <p>kasusSembuh: {kasusSembuh}</p>
        </div>
    )
}

export default Card;
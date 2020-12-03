import React from 'react';

const Layout = ({confirmed, deaths, recovered}) =>{
    return (
        <div className="card-container">
            <p>{confirmed}</p>
            <p>{deaths}</p>
            <p>{recovered}</p>
        </div>
    )
}

export default Layout;
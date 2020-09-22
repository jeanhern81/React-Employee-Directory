import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
        <div className="header">
        <h1>Employee Directory</h1>
        <p><h3>Click on carrots to filter by heading or use the search box to narrow your results.</h3></p>
        </div>
    )
}

export default Header;
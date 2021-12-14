import React from 'react';
import logo from '../assests/images/logo.png';
const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="Todoist"></img>
                </div>
            </nav>
        </header>
    )
}

export default Header;

import React from 'react';
import './mainHeader.css';

function MainHeader() {
    return (
        <header className="main-header">
            <div className="container">
                <img src="http://flexbox.ninja/assets/images/logo.svg" width="150" height="90" alt="Flexbox.ninja" />
                <div style={{width:400}}></div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default MainHeader;
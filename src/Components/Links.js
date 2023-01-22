import React from 'react';

function Links() {
    return (
        <nav className="navbar navbar-light">
            <ul className="navbar-nav flex-column justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/MariaAyman" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github color-white hover-link"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/maria-ayman-mansour1877/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in color-white hover-link"></i>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="https://dribbble.com/MariaAyman" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-dribbble color-white hover-link"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://codepen.io/MariaAyman" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-codepen color-white hover-link"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Links;
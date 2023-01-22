import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation(); //returns 'window.location' object
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <nav className="navbar navbar-light">
            <ul className="navbar-nav flex-row justify-content-between" style={{width: '300px'}}>
                <li className="nav-item active">
                    <Link to='/' className={"nav-link" + (url === '/' ? ' isActive' : '')}>
                        <i className="fa-solid fa-house color-white hover-link"></i> <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className={"nav-link" + (url === '/about' ? ' isActive' : '')}>
                        <i className="fa-solid fa-user color-white hover-link"></i>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to='/projects' className={"nav-link" + (url === '/projects' ? ' isActive' : '')}>
                        {/* <i className="fa-solid fa-laptop-code color-white hover-link"></i> */}
                        <i className="fa-solid fa-code color-white hover-link"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/contacts' className={"nav-link" + (url === '/contacts' ? ' isActive' : '')}>
                        <i className="fa-solid fa-phone color-white hover-link"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
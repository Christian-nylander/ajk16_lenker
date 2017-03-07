import React from 'react';
import { Link } from 'react-router';
import './css/navbar.css';

const Navbar = () => (
    <div>
        <header>
            <div className="logo">LEN<span>KER</span></div>

            <nav>
                <Link to="/">HOME</Link>
                <Link to="/products">PRODUCTS</Link>
                <Link to="/workshop">WORK SHOP</Link>
                <Link to="/backstage">BACKSTAGE</Link>
                <Link to="/partners">PARTNERS</Link>
            </nav>

            <input className="search" type="text" placeholder="SEARCH"/>
        </header>
    </div>
);

export default Navbar;
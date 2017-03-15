import React from 'react';
import {Link} from 'react-router';
import './css/navbar.css';

const Active = {backgroundColor: '#DA1A18'};

const Navbar = (props) => (
    <header>
        <Link to="/"><div className="logo">LEN<span>KER</span></div></Link>

        <nav>
            <Link to="/products" activeStyle={Active}>PRODUCTS</Link>
            <Link to="/workshop" activeStyle={Active}>WORK SHOP</Link>
            <Link to="/backstage" activeStyle={Active}>BACKSTAGE</Link>
            <Link to="/partners" activeStyle={Active}>PARTNERS</Link>
        </nav>
            <input id="searchValue" className="search" type="search" placeholder="SEARCH"/>
    </header>
);

export default Navbar;
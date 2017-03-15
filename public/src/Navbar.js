import React from 'react';
import {Link} from 'react-router';
import './css/navbar.css';

const Active = {backgroundColor: '#DA1A18'};

const Navbar = (props) => (
    <header>
        <Link to="/"><div className="logo">LEN<span>KER</span></div></Link>

        <nav>
            <Link to="/products" activeStyle={Active}>PRODUCTS</Link>
            <Link to="/backstage" activeStyle={Active}>BACKSTAGE</Link>
            <Link to="/partners" activeStyle={Active}>PARTNERS</Link>
        </nav>
            <div id="searchValue" className="search"><i className="fa fa-phone-square" aria-hidden="true"></i> 0707-706050</div>
    </header>
);

export default Navbar;
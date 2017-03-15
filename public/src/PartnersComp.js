import React from 'react';
import { Link } from 'react-router'

const PartnersComp = () =>
    (
        <div className="partners-container">
            <Link to="#"><img className="partner-img" src="../assets/logo1.png" alt="logo"/></Link>
            <Link to="#"><img className="partner-img" src="../assets/logo2.png" alt="logo"/></Link>
            <Link to="#"><img className="partner-img" src="../assets/logo3.png" alt="logo"/></Link>
            <Link to="#"><img className="partner-img" src="../assets/logo4.png" alt="logo"/></Link>
            <Link to="#"><img className="partner-img" src="../assets/logo5.png" alt="logo"/></Link>
            <Link to="#"><img className="partner-img" src="../assets/logo6.png" alt="logo"/></Link>
        </div>
    );

export default PartnersComp;

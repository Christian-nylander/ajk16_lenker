import React from 'react';
import './css/footer.css';

const FooterComp = () => (
    <div className="footercomp">
        <div className="footer-top">
            <div id="footer-logo" className="logo">LEN<span>KER</span></div>
            <i className="fa fa-facebook-square social-icon" aria-hidden="true"></i>
            <i className="fa fa-twitter social-icon" aria-hidden="true"></i>
            <i className="fa fa-instagram social-icon" aria-hidden="true"></i>
            <i className="fa fa-google social-icon" aria-hidden="true"></i>
        </div>
        <div className="footer-bottom">
            <h4>CONTACT</h4>
            <h4>Lenker</h4>
            <h4>Godthåb 3905</h4>
            <h4>Nuuk Greenland</h4>
        </div>
    </div>
);

export default FooterComp;

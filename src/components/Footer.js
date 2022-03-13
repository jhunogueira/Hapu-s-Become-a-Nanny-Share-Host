import React from "react";

import CalendarIcon from '../assets/FooterAssets/CalendarIcon.svg';
import HapuLogo from '../assets/FooterAssets/HapuLogo.svg';
import Facebook from '../assets/FooterAssets/Facebook.svg';
import Twitter from '../assets/FooterAssets/Twitter.svg';
import Instagram from '../assets/FooterAssets/Instagram.svg';

export function Footer(){
    return (
    <div className="footer">
        <div className="section-one">
            <h2>Become a nanny share host</h2>
            <p className="p-body">Takes less than 5 minutes to get started</p>
            <button>
                <img src={CalendarIcon} alt='A calendar icon' />
                <div className="button-text">
                    <p className="title">Create Your Nanny Share</p>
                    <p className="description">Takes less than 5 minutes</p>
                </div>
            </button>
            <a href="#">Or browse local nanny-shares</a>
        </div>

        <div className="section-two">
            <img src={HapuLogo} alt="The Hapu's Logo" />
            <nav className="nav-bar-bottom">
                <a href="#">Share Your Nanny</a>
                <a href="#">Our Story</a>
                <a href="#">Blog</a>
                <a href="#">Terms & Privacy</a>
            </nav>
            <div className="social">
                <img src={Facebook} alt="Facebook's Icon"/>
                <img src={Twitter} alt="Twitter's Icon"/>
                <img src={Instagram} alt="Instagram's Icon"/>
            </div>
        </div>

        <div className="section-three">
            <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
        </div>
    </div>
    );
}
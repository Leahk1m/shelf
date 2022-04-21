import React from "react";
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
    return(
        <div className="footer-div">
            <div className="about-div">
                <h3>About</h3>
                <p>shelf is a clone of Yelp, in which users can explore and rate businesses that center around artisanal grocery stores. It is meant for those who love shopping at unconventional places, made easy, with eccentric locations all listed in one spot.  </p>

            </div>

            <div className="discover-div">
                <div className="github-div">
                    <FaGithub className="github-logo"/><a className="github-link"href='https://github.com/Leahk1m'>Github</a>
                </div>

                <div className="linked-in-div">
                    <FaLinkedin className="linked-in-logo" /><p className="linked-in-link">Linkedin</p>
                </div>
            </div>

        </div>

    );

}


export default Footer;

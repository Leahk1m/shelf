import React from "react";
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div className="footer-div">
            <div className="about-div">
                <h3>About</h3>
                <div className="about-links-div">
                    <a className="portfolio-link-footer"target="_blank" href="http://www.leahkim.net/">Personal Portfolio</a>
                    <Link className="portfolio-link-footer"onClick={() => window.location = 'mailto:lk.leahkim@gmail.com'}>Contact Me</Link>
                </div>

            </div>

            <div className="discover-div">
                <h3 className="discover-h3">Discover</h3>
                <div className="github-div">
                    <FaGithub className="github-logo"/><a target="_blank"className="github-link"href='https://github.com/Leahk1m'>Github</a>
                </div>

                <div className="linked-in-div">
                    <FaLinkedin className="linked-in-logo" /><a target="_blank"className="linkedin-link"href='https://www.linkedin.com/in/leahk1m'>Linkedin</a>
                </div>
            </div>

        </div>

    );

}


export default Footer;

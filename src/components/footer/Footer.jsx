import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    <span>Thank You to visit here...</span><br />
                    Hello, I'm Mohit Yede.
                    I created this application to showcase my React development skills.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://github.com/mohityede">
                            <FaGithub />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/MohitkumarYede">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/mohit-yede-563554197/">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="social">
                    <a href="#" className="youtube">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="#" className="facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="twitter">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="#" className="instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <div className="cr">© 2020 Copyright:<a href="#">A link to visit</a></div>
            </footer>
        </div>
    )
}

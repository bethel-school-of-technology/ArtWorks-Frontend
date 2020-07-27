import React from 'react';
import ArtWorks from '../assets/Artworkslogo.png';

import './AWFooter.css';

const AWFooter=() => {
  return (
    <div className="footer">
      <footer className="footer-bar">
        <div className="footer-logo">
          <img src={ArtWorks} alt=""></img>
        </div>
        <div className="footer-items">
          <ul>
            <li>Contact us!</li>
            <li><a href="mailto:info@ellianaolivia.com">info@ellianaolivia.com</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default AWFooter;
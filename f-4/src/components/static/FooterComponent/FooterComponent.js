import React from 'react';
import PropTypes from 'prop-types';
import './FooterComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
const FooterComponent = () => {
  return (
  <footer className='FooterComponent'>
    <div className='footer_address'>
      <p><FontAwesomeIcon icon= {faMapMarkerAlt} />123 Calle Santa Coloma, Ciudad Barcelona</p>
    </div>
    <div className='footer_social'>
      <ul>
        <li><a href='https://es-es.facebook.com'><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href='https://twitter.com/?lang=es'><FontAwesomeIcon icon= {faTwitter} /></a></li>
        <li><a href='https://www.instagram.com'><FontAwesomeIcon icon= {faInstagram} /></a></li>
        <li><a href='https://www.linkedin.com'><FontAwesomeIcon icon= {faLinkedin} /></a></li>
      </ul>
    </div>
  </footer>
  );
}

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;

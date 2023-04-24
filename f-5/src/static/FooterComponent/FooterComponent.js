import React from "react";
import PropTypes from "prop-types";
import styles from "./FooterComponent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <div className={styles.FooterComponent}>
      <div className={styles.Footer}>
        <h6 className={styles.FooterText}>Estamos en:</h6>
        <ul className={styles.FooterContainer}>
          <li>
            <a className={styles.FooterLink} href="https://es-es.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              className={styles.FooterLink}
              href="https://twitter.com/?lang=es"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a className={styles.FooterLink} href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a className={styles.FooterLink} href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;

import React from "react";
import PropTypes from "prop-types";
import styles from "./AboutComponent.module.scss";

const AboutComponent = () => (
  <div className={styles.AboutComponent}>
    <div>
      <div>
        <h1>SUNSHINE</h1>
      </div>
      <div>
        <h1>CLUB</h1>
      </div>
    </div>
  </div>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;

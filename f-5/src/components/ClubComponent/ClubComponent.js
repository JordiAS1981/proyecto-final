import React from "react";
import PropTypes from "prop-types";
import styles from "./ClubComponent.module.scss";
import CarruselComponent from "../CarruselComponent/CarruselComponent";

const ClubComponent = () => (
  <div className={styles.ClubComponent}>
    <CarruselComponent></CarruselComponent>
  </div>
);

ClubComponent.propTypes = {};

ClubComponent.defaultProps = {};

export default ClubComponent;

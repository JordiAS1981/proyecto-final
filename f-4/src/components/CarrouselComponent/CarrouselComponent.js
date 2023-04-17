import React from "react";
import PropTypes from "prop-types";
import "./CarrouselComponent.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarrouselComponent = () => {
  const setting = {
    autoplay: true,
    interval: 3000,
  };
  return (
    <Carousel className="CarrouselComponent">
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg" />
      </div>
      <div>
        <img src="https://estaticos-cdn.elperiodico.com/clip/ad737e22-b8ee-4dc0-a523-10ece744331d_alta-libre-aspect-ratio_default_0.jpg" />
      </div>
      <div>
        <img src="https://www.elsoldeacapulco.com.mx/incoming/dqp9yg-discoteca.jpg/ALTERNATES/LANDSCAPE_960/discoteca.jpg" />
      </div>
      <div>
        <img src="https://assets.buendiatours.com/s3fs-public/styles/highlight_large/public/2020-12/berlin-guia-ocio-fiesta-mejores-discotecas-bailando.jpg.webp?VersionId=SAX.jfc0iL_yw_Ej8KyHM4Xt1yJGY36b&itok=tqFpqCDO" />
      </div>
    </Carousel>
  );
};

CarrouselComponent.propTypes = {};

CarrouselComponent.defaultProps = {};

export default CarrouselComponent;

import PropTypes from "prop-types";
import styles from "./CarruselComponent.module.scss";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarruselComponent = () => {
  return (
    <div className={styles.CarruselComponent}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-navigation-border": "solid black 2px",
        }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay
        loop={true}
      >
        <SwiperSlide>
          <img
            src={
              "https://images.xceed.me/clubs/covers/kit-kat-club-club-berlin-xceed-8f9b.png"
            }
            alt="evento"
            width="900px"
            height="500px"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.neweuropetours.eu/wp-content/uploads/2018/07/matrix-club-berlin.jpg"
            alt="evento"
            width="900px"
            height="500px"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.xceed.me/clubs/gallery/berlinclub-club-madrid-xceed-1.jpg?w=600&fm=auto"
            alt="evento"
            width="900px"
            height="500px"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/dc/d9/ce/laser-show.jpg"
            alt="evento"
            width="900px"
            height="500px"
          ></img>
        </SwiperSlide>
      </Swiper>
      <div className={styles.history}>
        <h4>
          Hace 20 años, una pequeña discoteca abrió sus puertas en el corazón de
          la ciudad. <br></br>Al principio, solo era un lugar modesto con una
          pista de baile pequeña y una barra de bebidas,<br></br> pero
          rápidamente se convirtió en el lugar favorito de los jóvenes de la
          ciudad.<br></br>
          Con el paso de los años, la discoteca creció en popularidad y en
          tamaño, agregando nuevas áreas de baile, una cabina de <br></br>DJ
          profesional y una decoración más moderna y sofisticada. <br></br>La
          discoteca se convirtió en el lugar donde lo jóvenes y adultos de todas
          las edades se reunían para bailar y disfrutar de la música.<br></br>{" "}
          Los DJs más populares de la ciudad se presentaban en la cabina y
          hacían vibrar a la multitud con sus mezclas. <br></br>La discoteca
          también organizaba fiestas temáticas y eventos especiales, atrayendo a
          una multitud aún más grande. <br></br>A lo largo de la dos décadas, la
          discoteca se mantuvo al día con las tendencias y la tecnología,
          <br></br> instalando equipos de sonido y luces de última generación La
          música y la atmósfera siempre eran emocionantes,<br></br> y la
          discoteca se ganó la reputación de ser uno de los lugares más
          emocionantes y vibrantes de la ciudad. Hoy, después de 20 años de
          historia,<br></br> la discoteca sigue siendo uno de los lugares más
          populares de la ciudad. Ha resistido la prueba del tiempo, y sigue
          siendo el <br></br>lugar donde los jóvenes y adultos se reúnen para
          bailar, socializar y disfrutar de la música.<br></br> La discoteca es
          un verdadero monumento de la vida nocturna de la ciudad y un lugar que
          ha dejado una marca indeleble en la historia de la comunidad.
        </h4>
      </div>
    </div>
  );
};

CarruselComponent.propTypes = {};

CarruselComponent.defaultProps = {};

export default CarruselComponent;

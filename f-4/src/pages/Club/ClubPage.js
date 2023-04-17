import { Link } from "react-router-dom";
import "./ClubPage.scss";
import CarrouselComponent from "../../components/CarrouselComponent/CarrouselComponent";


export default function ClubPage() {
    return (
    <div className="ClubPage">
        <div>
            <CarrouselComponent></CarrouselComponent>
        </div>
        <div className="container">
        <h4>
            Hace 20 años, una pequeña discoteca abrió sus puertas en el corazón de
            la ciudad. <br></br>Al principio, solo era un lugar modesto con una pista de
            baile pequeña y una barra de bebidas,<br></br> pero rápidamente se
            convirtió en el lugar favorito de los jóvenes de la ciudad.<br></br>
            Con el paso de los años, la discoteca creció en popularidad y en
            tamaño, agregando nuevas áreas de baile, una cabina de <br></br>DJ profesional y
            una decoración más moderna y sofisticada. <br></br>La discoteca se
            convirtió en el lugar donde lo jóvenes y adultos de todas las edades
            se reunían para bailar y disfrutar de la música.<br></br> Los DJs más
            populares de la ciudad se presentaban en la cabina y hacían vibrar a
            la multitud con sus mezclas. <br></br>La discoteca también organizaba
            fiestas temáticas y eventos especiales, atrayendo a una multitud aún
            más grande. <br></br>A lo largo de la dos décadas, la discoteca se
            mantuvo al día con las tendencias y la tecnología,<br></br> instalando equipos
            de sonido y luces de última generación La música y la atmósfera
            siempre eran emocionantes,<br></br> y la discoteca se ganó la reputación de ser
            uno de los lugares más emocionantes y vibrantes de la ciudad. Hoy,
            después de 20 años de historia,<br></br> la discoteca sigue siendo uno de los
            lugares más populares de la ciudad. Ha resistido la prueba del tiempo,
            y sigue siendo el <br></br>lugar donde los jóvenes y adultos se reúnen para
            bailar, socializar y disfrutar de la música.<br></br> La discoteca es un
            verdadero monumento de la vida nocturna de la ciudad y un lugar que ha
            dejado una marca indeleble en la historia de la comunidad.
        </h4>
        </div>
    </div>
    );
}

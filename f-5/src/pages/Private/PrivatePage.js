import styles from './PrivatePage.module.scss'
import CarritoComponent from "../../components/CarritoComponent/CarritoComponent";

export default function PrivatePage() {
    return (
        <div className={styles.carrito1}>
            <CarritoComponent></CarritoComponent>
        </div>
    );
}
import styles from "./HomePage.module.scss";
import AboutComponent from "../../components/AboutComponent/AboutComponent";

export default function HomePage() {
    return (
        <div className={styles.HomePage}>
            <div className={styles.Container}>
                <section className={styles.Introduce}>
                    <AboutComponent></AboutComponent>
                </section>
            </div>
        </div>
    );
}

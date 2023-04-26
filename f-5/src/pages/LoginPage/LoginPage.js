import styles from "./LoginPage.module.scss";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import RegistroComponent from "../../components/RegisterComponent/RegisterComponent";

export default function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <h2 className={styles.LoginTitle}>
      </h2>
      <div className={styles.FormulariosLogin}>
        <RegistroComponent></RegistroComponent>
        <LoginComponent></LoginComponent>
      </div>
    </div>
  );
}

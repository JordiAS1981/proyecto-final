import React from "react";
import PropTypes from "prop-types";
import styles from "./RegisterComponent.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doRegister } from "../../store/auth/actions";

const RegistroComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { errorRegister } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  function checkRegister() {
    dispatch(doRegister({ name: name, email: email, password: password }));
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className={styles.RegistroComponent}>
      <h1>REGISTER</h1>
      <form>
        <label>Nombre</label>
        <input
          className={styles.RegistroInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />

        <label>Email</label>
        <input
          className={styles.RegistroInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />

        <label>Constraseña</label>
        <input
          className={styles.RegistroInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
      </form>
      <button className={styles.RegistroButton} onClick={checkRegister}>
        Registrarme
      </button>
      {errorRegister.messageRegister && <p>Hay un error en el registro</p>}
    </div>
  );
};

RegistroComponent.propTypes = {};

RegistroComponent.defaultProps = {};

export default RegistroComponent;

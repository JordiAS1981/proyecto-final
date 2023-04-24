import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./LoginComponent.module.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../store/auth/actions";
import { Navigate } from "react-router-dom";

const LoginComponent = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { user, error } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  function checkLogin() {
    dispatch(doLogin({ email: name, password: password }));
    setName("");
    setPassword("");
  }

  useEffect(() => {
    if (user.user && user.user.id) {
      <Navigate to="/private" replace></Navigate>;
    }
  }, [user]);

  return (
    <div className={styles.LoginComponent}>
      <h3 className={styles.LoginTitle}>USUARIO</h3>
      <form>
        <label>Email</label>
        <br />
        <input
          className={styles.LoginInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label>Constraseña</label>
        <br />
        <input
          className={styles.LoginInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
      </form>
      <button className={styles.LoginButton} onClick={checkLogin}>
        Login
      </button>
      {error.message && <p>Hay un error en el login</p>}
    </div>
  );
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;

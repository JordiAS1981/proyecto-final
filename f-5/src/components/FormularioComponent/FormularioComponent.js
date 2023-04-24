import React from "react";
import PropTypes from "prop-types";
import styles from "./FormularioComponent.module.scss";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormularioComponent = () => {
  const form = useRef();
  const MySwal = withReactContent(Swal);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_npt7czb",
        "template_9x2yos7",
        form.current,
        "oCARw5ggzhnvntNQ2"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          MySwal.fire({
            title: <p>ESTATE AL DIA DE LAS NOVEDADES</p>,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );

    const formData = new FormData(e.target);

    const newSubscriber = {
      name: formData.get("name"),
      surname: formData.get("surname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    axios.post("http://localhost:3000/newsletter", newSubscriber).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className={styles.FormularioComponent}>
      <h1 className={styles.FormularioTitle}>NEWSLETTER</h1>
      <p className={styles.FormularioParr}>
        RECIBIRÁS INFORMACIÓN SOBRE PRÓXIMOS EVENTOS
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label className={styles.FormularioLabel}>
          <h3>NOMBRE</h3>
        </label>
        <input
          className={styles.FormularioInput}
          placeholder="Escribe tu nombre"
          type="text"
          name="name"
          required
        />
        <label className={styles.FormularioLabel}>
          <h3>APELLIDOS</h3>
        </label>
        <input
          className={styles.FormularioInput}
          placeholder="Escribe tus apellidos"
          type="text"
          name="surname"
          required
        />
        <label className={styles.FormularioLabel}>
          <h3>EMAIL</h3>
        </label>
        <input
          className={styles.FormularioInput}
          placeholder="Escribe tu correo"
          type="email"
          name="email"
          required
        />
        <label className={styles.FormularioLabel}>
          <h3>TELEFONO</h3>
        </label>
        <input
          className={styles.FormularioInput}
          placeholder="Escribe tu teléfono"
          type="text"
          name="telefono"
          required
        />
        <input
          className={styles.FormularioButton}
          type="submit"
          value="Enviar mensaje"
        />
      </form>
    </div>
  );
};

FormularioComponent.propTypes = {};

FormularioComponent.defaultProps = {};

export default FormularioComponent;

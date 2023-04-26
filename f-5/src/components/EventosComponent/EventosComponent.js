import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./EventosComponent.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { addCarritoCompra } from "../../store/peticiones/actions";
import { useDispatch } from "react-redux";

const EventosComponent = () => {
  const dispatch = useDispatch();
  const agregarCarrito = (producto) => {
    dispatch(addCarritoCompra(producto));
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tickets").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={styles.EventosComponent}>
      {data.map((item) => (
        <div className={styles.Card_Items}>
          <h3>{item.name}</h3>
          <p>{item.date}</p>
          <img
            className={styles.imagenEvento}
            src={item.photo}
            alt={item.name}
            width={300}
            height={400}
          />
          <Link to="/private">
            <button onClick={() => agregarCarrito(item)}>
              AGRAEGAR AL CARRITO
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

EventosComponent.propTypes = {};

EventosComponent.defaultProps = {};

export default EventosComponent;

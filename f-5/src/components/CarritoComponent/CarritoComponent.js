import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CarritoComponent.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { deletCarritoCompra, clearCarrito } from "../../store/peticiones/actions";
import { useDispatch } from "react-redux";

const CarritoComponent = () => {
  const dispatch = useDispatch();
  const [carrito, setCarrito] = useState([]);
  const [carritoCompra, setCarritoCompra] = useState(0);

  const removeFromCart = (producto) => {
    dispatch(deletCarritoCompra(producto.id));
    const newEventos = carrito.filter((p) => p.id !== producto.id);
    setCarrito(newEventos);
  };

  const handleClearCarrito = async () => {
    try {
      await axios.delete("http://localhost:3000/carrito");
      await dispatch(clearCarrito());
      setCarrito([]);
      setCarritoCompra(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/carrito");
        setCarrito(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const calcularTotal = () => {
      const total = carrito.reduce(
        (acumulador, producto) => acumulador + Number(producto.price),0);
      setCarritoCompra(total);
    };
    calcularTotal();
  }, [carrito]);

  return (
    <div className={styles.CarritoComponent}>
      <div className={styles.carrito}>
        {carrito.map((producto) => (
          <div key={producto.id} className= {styles.card}>
            <img
              className={styles.imagenEvento}
              src={producto.photo}
              alt={producto.name}
              width={300}
              height={400}
            ></img>
            <p className={styles.card_h3}>{producto.description}</p>
            <p className={styles.price}>{producto.price}€</p>
            <button onClick={() => removeFromCart(producto)}>
              ELIMINAR DEL CARRITO
            </button>
          </div>
        ))}
        </div>
        <div className={styles.button}>
            <button onClick={handleClearCarrito}>VACIAR CARRITO</button>
            <p className={styles.card_h3}>PRECIO TOTAL: €{carritoCompra}</p>
            <Link to={"/eventos"}>
              <button>VOLVER A EVENTOS</button>
            </Link>
        </div>
    </div>
  );
};

CarritoComponent.propTypes = {};

CarritoComponent.defaultProps = {};

export default CarritoComponent;

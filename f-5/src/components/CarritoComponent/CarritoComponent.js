import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./CarritoComponent.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { deletCarritoCompra, comentCarrito } from "../../store/peticiones/actions";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const CarritoComponent = () => {
  const dispatch = useDispatch();
  const [carrito, setCarrito] = useState([]);
  const [carritoCompra, setCarritoCompra] = useState(0);
  const [comentariosProducto, setComentariosProducto] = useState({});

  const removeFromCart = (producto) => {
    dispatch(deletCarritoCompra(producto.id));
    const newEventos = carrito.filter((p) => p.id !== producto.id);
    setCarrito(newEventos);
  };

  const handleClearCarrito = async (comment) => {
    try {
      setCarrito([]);
      setCarritoCompra(0);
      await axios.put('http://localhost:3000/carrito/${id}', { comentario: comment });
      console.log("COMENTARIO ELIMINADO");
    } catch (error) {
      console.log(error);
    }
  };

  const handleComentario = (producto)=> {
    dispatch(comentCarrito(producto.id, comentariosProducto[producto.id]));
  }

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
            <textarea onChange={(e)=> {setComentariosProducto({...comentariosProducto,[producto.id]: e.target.value});}} ></textarea>
            <Button onClick={()=>handleComentario(producto)}>COMENTA</Button>
            <p className={styles.price}>{producto.price}€</p>
            <button onClick={() => removeFromCart(producto)}>
              ELIMINAR EVENTO
            </button>
          </div>
        ))}
        </div>
        <div className={styles.button}>
            <button onClick={handleClearCarrito}>ELIMINAR DEL CARRITO</button>
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

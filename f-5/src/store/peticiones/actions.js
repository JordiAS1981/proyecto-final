import axios from 'axios'
import {
    ADD_PRODUCTO_CARRITO,
    ADD_PRODUCTO_CARRITO_OK, 
    ADD_PRODUCTO_CARRITO_FAIL, 

    DELET_PRODUCTO_CARRITO,
    DELET_PRODUCTO_CARRITO_OK,
    DELET_PRODUCTO_CARRITO_FAIL,

    CLEAR_PRODUCTO_CARRITO,
    CLEAR_PRODUCTO_CARRITO_OK,
    CLEAR_PRODUCTO_CARRITO_FAIL,


} from "./actionTypes"

export function actionaddCarrito() {
    return{
        type: ADD_PRODUCTO_CARRITO
    }
}

export function actionaddCarritoOk(productoCarro){
    return{
        type: ADD_PRODUCTO_CARRITO_OK,
        payload: productoCarro
    }
}

export function actionaddCarritoFail(error) {
    return{
        type: ADD_PRODUCTO_CARRITO_FAIL,
        payload: error
    }
}

export function addCarritoCompra(productoCarrito) {
    return async (dispatch) => {
        dispatch(actionaddCarrito(productoCarrito))
        try{
            const response = await axios.post("http://localhost:3000/carrito", productoCarrito)
            dispatch(actionaddCarritoOk(response.data))
        }catch(error) {
            dispatch(actionaddCarritoFail(error))
        }
    }
}

export function actionDeletCarrito(idProducto) {
    return{
        type: DELET_PRODUCTO_CARRITO,
        payload: idProducto
    }
}

export function actionDeletCarritoOk(productoCarrito){
    return{
        type: DELET_PRODUCTO_CARRITO_OK,
        payload: productoCarrito,
    }
}

export function actionDeletCarritoFail(error) {
    return{
        type: DELET_PRODUCTO_CARRITO_FAIL,
        payload: error
    }
}

export function deletCarritoCompra(idProducto) {
    return async (dispatch) => {
        dispatch(actionDeletCarrito(idProducto))
        try{
            const response = await axios.delete(`http://localhost:3000/carrito/${idProducto}`)
            dispatch(actionDeletCarritoOk(response.data))
        }catch(error) {
            dispatch(actionDeletCarritoFail(error))
        }
    }
}
export function actionClearCarrito(idProducto) {
    return{
        type: CLEAR_PRODUCTO_CARRITO
    }
}

export function actionClearCarritoOk(productoCarrito){
    return{
        type: CLEAR_PRODUCTO_CARRITO_OK,
        payload: productoCarrito,
    }
}

export function actionClearCarritoFail(error) {
    return{
        type: CLEAR_PRODUCTO_CARRITO_FAIL,
        payload: error
    }
}


export function clearCarrito(Producto) {
    return async (dispatch) => {
        dispatch(actionClearCarrito())
        try{
            const response = await axios.delete(`http://localhost:3000/carrito/0`)
            dispatch(actionClearCarritoOk(response.data))
        }catch(error) {
            dispatch(actionClearCarritoFail(error))
        }
    }
}
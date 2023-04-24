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
} from "./actionTypes";

const initialState = {
  addCarrito: [],
  loadingAddCarrito: false,

  eliminaCarrito: {},
  loadingEliminaCarrito: false,

  clearCarrito: [],
  loadingClearCarrito: false,

  error: {
    message: "",
  },
};

export default function PeticionesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTO_CARRITO:
      state = { ...state, loadingAddCarrito: false };
      break;

    case ADD_PRODUCTO_CARRITO_OK:
      state = {
        ...state,
        loadingAddCarrito: true,
        productoCarro: action.payload,
      };
      break;

    case ADD_PRODUCTO_CARRITO_FAIL:
      state = {
        ...state,
        loadingAddCarrito: false,
        productoCarro: [],
        error: { message: action.payload },
      };
      break;

    case DELET_PRODUCTO_CARRITO:
      state = { ...state, loadingEliminaCarrito: false };
      break;

    case DELET_PRODUCTO_CARRITO_OK:
      state = {
        ...state,
        loadingEliminaCarrito: true,
        eliminaProductoCarro: action.payload,
      };
      break;

    case DELET_PRODUCTO_CARRITO_FAIL:
      state = {
        ...state,
        loadingEliminaCarrito: false,
        eliminaProductoCarro: [],
        error: { message: action.payload },
      };
      break;

    case CLEAR_PRODUCTO_CARRITO:
      state = { ...state, loadingClearCarrito: false };
      break;

    case CLEAR_PRODUCTO_CARRITO_OK:
      state = {
        ...state,
        loadingClearCarrito: true,
        clearProductoCarro: action.payload,
      };
      break;

    case CLEAR_PRODUCTO_CARRITO_FAIL:
      state = {
        ...state,
        loadingClearCarrito: false,
        clearProductoCarro: [],
        error: { message: action.payload },
      };
      break;

    default:
      break;
  }
  return state;
}

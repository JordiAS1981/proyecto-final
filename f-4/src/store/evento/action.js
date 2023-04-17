import axios from 'axios'
import {
    GET_EVENTO_INFO,
    GET_EVENTO_INFO_OK,
    GET_EVENTO_INFO_FAIL,

    POST_EVENTO_FAV,
    POST_EVENTO_FAV_OK,
    POST_EVENTO_FAV_FAIL,

    GET_EVENTOS_FAVORITOS,
    GET_EVENTOS_FAVORITOS_OK,
    GET_EVENTOS_FAVORITOS_FAIL,

    DELETE_EVENTO_FAVORITO,
    DELETE_EVENTO_FAVORITO_OK,
    DELETE_EVENTO_FAVORITO_FAIL,

    UPDATE_EVENTO_FAVORITO,
    UPDATE_EVENTO_FAVORITO_OK,
    UPDATE_EVENTO_FAVORITO_FAIL
} from './actionTypes'

export function actionGetEventoInfo(idEvento) {
    return {
        type: GET_EVENTO_INFO,
        payload: idEvento
    }
}

export function actionGetEventoInfoOk(eventoInfo) {
    return {
        type: GET_EVENTO_INFO_OK,
        payload: eventoInfo
    }
}

export function actionGetEventoInfoFail(error) {
    return {
        type: GET_EVENTO_INFO_FAIL,
        payload: error
    }
}

export function getEventoInfo(idEvento) {
    return async (dispatch) => {
        dispatch(actionGetEventoInfo(idEvento))
        try {
            const response = await axios.get("http://localhost:3000/ticket/${idEvento}")
            dispatch(actionGetEventoInfoOk(response.data))
        }catch(error) {
            dispatch(actionGetEventoInfoFail(error))
        }
    }
}

export function actionPostEventoFav(){
    return {
        type: POST_EVENTO_FAV
    }
}

export function actionPostEventoFavOk(eventoFav){
    return {
        type: POST_EVENTO_FAV_OK,
        payload: eventoFav
    }
}

export function actionPostEventoFail(error){
    return {
        type: POST_EVENTO_FAV_FAIL,
        payload: error,
    }
}

export function addEventoFav(eventoFavorito){
    return async (dispatch) => {
        dispatch(actionPostEventoFav(eventoFavorito))
        try {
            const response = await axios.post("http://localhost:3000/favoritos", eventoFavorito)
            dispatch(actionPostEventoFavOk(response.data))
        }catch(error){
            dispatch(actionPostEventoFail(error))
        }
    }
}

export function actionGetEventosFav() {
    return {
        type: GET_EVENTOS_FAVORITOS
    }
}

export function actionGetEventosFavOk(eventosFav) {
    return {
        type: GET_EVENTOS_FAVORITOS_OK,
        payload: eventosFav
    }
}

export function actionGetEventosFavFail(error) {
    return {
        type: GET_EVENTOS_FAVORITOS_FAIL,
        payload: error
    }
}

export function getEventosFavoritos() {
    return async (dispatch) => {
        dispatch(actionGetEventosFav())
        try {
            const response = await axios.get("http://localhost:3000/favoritos")
        }catch(error) {
            dispatch(actionGetEventosFavFail(error))
        }
    }
}

export function actionDeleteEvento(idEventos) {
    return {
        type: DELETE_EVENTO_FAVORITO,
        payload: idEvento
    }
}

export function actionDeleteEventoOk(infoEvento) {
    return {
        type: DELETE_EVENTO_FAVORITO_OK,
        payload: infoEvento
    }
}

export function actionDeleteEventoFail(error) {
    return {
        type: DELETE_EVENTO_FAVORITO_FAIL,
        payload: error
    }
}

export function deleteEventoFavorito(idEvento) {
    return async (dispatch) => {
        dispatch(actionDeleteEventoOk(idEvento))
        try {
            const response = await axios.delete('http://localhost:3000/favoritos/${idEvento}')
            dispatch(actionDeleteEventoOk(response.data))
        }catch(error) {
            dispatch(actionDeleteEventoFail(error))
        }
    }
}

export function actionUpdateEvento() {
    return {
        type: UPDATE_EVENTO_FAVORITO
    }
}

export function actionUpdateEventoOk(updateComentario) {
    return {
        type: UPDATE_EVENTO_FAVORITO_OK,
        payload: updateComentario
    }
}

export function actionUpdateEventoFail(error) {
    return {
        type: UPDATE_EVENTO_FAVORITO_FAIL,
        payload: error
    }
}

export function updateEventoFavorito(id, opinion) {
    return async (dispatch) => {
        dispatch(actionUpdateEvento())
        try {
            const response = await axios.patch('http://localhost:300/favoritos/${id}', {comentrio: opinion})
            dispatch(actionUpdateEventoOk(response.data))
        }catch(error) {
            dispatch(actionUpdateEventoFail(error))
        }
    }
}
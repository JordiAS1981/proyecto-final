import axios from "axios";

import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL,

    DO_REGISTER,
    DO_REGISTER_OK,
    DO_REGISTER_FAIL,

} from "./actionTypes";

export function actionDoLogin(loginData){
    return {
        type: DO_LOGIN,
        payload: loginData
    }
}

export function actionDoLoginOk(userDetails){
    return {
        type: DO_LOGIN_OK,
        payload: userDetails
    }
}

export function actionDoLoginFail(error){
    return {
        type: DO_LOGIN_FAIL,
        payload: error
    }
}

export function doLogin(userData){
    return async (dispatch) => {
        try{
            dispatch(actionDoLogin(userData))
            // const response = await axios.post("https://dummyjson.com/auth/login", userData)
            const response = await axios.post("http://localhost:3000/login", userData)
            dispatch(actionDoLoginOk(response.data))
        } catch (error) {
            dispatch(actionDoLoginFail(error))
        }
    }
}

export function actionDoLogout() {
    return {
        type: DO_LOGOUT
    }
}

export function actionDoLogoutOK() {
    return {
        type: DO_LOGOUT_OK
    }
}

export function actionDoLogoutFail(error) {
    return {
        type: DO_LOGOUT_FAIL,
        payload: error
    }
}

export function doLogout() {
    return (dispatch)=> {
        try{
            dispatch(actionDoLogout())
            dispatch(actionDoLogoutOK())
        }catch(error) {
            dispatch(actionDoLogoutFail())
        }
    }
}

export function actionDoRegister(registerData) {
    return {
        type: DO_REGISTER,
        payload: registerData
    }
}

export function actionDoRegisterOk(registerDetails) {
    return {
        type: DO_REGISTER_OK,
        payload: registerDetails
    }
}

export function actionDoRegisterFail(error) {
    return {
        type: DO_REGISTER_FAIL,
        payload: error
    }
}

export function doRegister(userRegisterData) {
    return async (dispatch)=> {
        try {
            dispatch(actionDoRegister(userRegisterData))
            const response = await axios.post("http://localhost:3000/register", userRegisterData)
            dispatch(actionDoRegisterOk(response.data))
        }catch(error) {
            dispatch(actionDoRegisterFail(error))
        }
    }
}
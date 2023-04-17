import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL,

    DO_REGISTER,
    DO_REGISTER_OK,
    DO_REGISTER_FAIL

} from "./actionTypes";


const initialState = {
    loadingLogin: false,
    user: {},
    loadingRegister: false,
    error: {
        message: ""
    },
    errorRegister: {
        messageRegister: ""
    }
};

const recuperarUsuario = () => {
    try{
        return JSON.parse(localStorage.getItem("_user"));
    }catch(error) {
        return{}
    }
};

const AuthReducer = (state = initialState, action)=>  {
    switch (action.type) {
        case DO_LOGIN:
            state = {...state, loadingLogin: true}
            break

        case DO_LOGIN_OK:
            state = {...state, loadingLogin: false, user: action.payload}
            break
        
        case DO_LOGIN_FAIL:
            state = {...state, loadingLogin: false, user:{}, error: {message: action.payload}}
            break


            case DO_LOGOUT:
                state = {...state}
                break
            case DO_LOGOUT_OK:
                state = {...state, user:{}}
                break


            case DO_REGISTER:
                state = {...state, loadingRegister: true}
                break

            case DO_REGISTER_OK:
                state = {...state, loadingRegister: false, register: action.payload}
                break
        
            case DO_REGISTER_FAIL:
                state = { ...state, loadingRegister: false, register: {}, errorRegister: {messageRegister: action.payload}}
                break
                
        default:
            break
    }
    return state
}

export default AuthReducer;
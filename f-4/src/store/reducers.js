import { combineReducers } from "redux";
import EventoReducer from "./evento/reducer";
import AuthReducer from "./auth/reducer";


const rootReducer = combineReducers({
    EventoReducer,
    AuthReducer
})

export default rootReducer
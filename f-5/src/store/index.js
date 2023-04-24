import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    const json = JSON.stringify(store.getState().AuthReducer.user)
    localStorage.setItem("_user", json)
})

export default store
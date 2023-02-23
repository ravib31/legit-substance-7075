import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as menReducer} from "./Product/reducer";

const rootReducer = combineReducers({
    menReducer,
})

 export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
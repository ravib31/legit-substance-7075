import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as menReducer } from "./Product/reducer";
import { Woreducer as womenReducer } from "./Product/reducer";

const rootReducer = combineReducers({
    menReducer,
    womenReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
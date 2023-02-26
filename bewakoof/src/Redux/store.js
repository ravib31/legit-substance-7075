import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as menReducer } from "./Product/reducer";
import { reducer as cartReducer } from "./Cart/reducer"
import { Woreducer as womenReducer } from "./Product/reducer";
import { reducer as authentication } from "./Auth/reducer";
const rootReducer = combineReducers({
    menReducer,
    cartReducer,
    womenReducer,authentication 
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
import { combineReducers } from "redux"
import { cityReducer } from "./cityReducer"
import { loadingReducer } from "./loadingReducer"

export const RootReducer = combineReducers({
    cityReducer: cityReducer,
    loadingReducer: loadingReducer
})
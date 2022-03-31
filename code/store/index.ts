import { createStore, combineReducers } from "redux";
import { RootReducer } from "./RootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(RootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof RootReducer>
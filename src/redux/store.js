import { combineReducers,
legacy_createStore as createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'; 
import { allData,oneData,getUser,addUser,cartItems,getAuthors } from "./reducer"
const reducers = combineReducers({ allData,oneData,getUser,addUser,cartItems,getAuthors });
const loadStorage = JSON.parse(localStorage.getItem("cart")) || [];
const initialState = {cartItems:{ data:[...loadStorage] } }
const middleWare = [thunk];
const store = createStore(reducers,initialState,applyMiddleware(...middleWare));

export default store;
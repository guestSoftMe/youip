import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {ip} from "./api";
import thunk from "redux-thunk";

const reduser = combineReducers({
    api:ip
})

export const store = createStore(reduser,applyMiddleware(thunk))

import React from "react";
import axios from "axios";

const initialState = {
    ip: []
}

export function ip(state = initialState, action) {
    switch (action.type) {
        case 'IP':
            return {
                ...state, ip: [action.ip]
            }
        default:
            return state
    }
}

const youip = (ip) => ({type: 'IP', ip})

export const thunkIp = () => (dispatch) => {
    axios.get('http://ipwhois.app/json/')
        .then(data => {
            dispatch(youip(data.data))
        })
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Context} from "./context";

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={'Hello 123456'}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

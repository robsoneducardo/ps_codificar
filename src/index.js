import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let api_url = "https://my-json-server.typicode.com/codificar/oficina/proposals";

function confirmBudget (budgets){
    ReactDOM.render(
            <App budgets={budgets} />,
            document.getElementById('root'));
}

fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => confirmBudget(data));

reportWebVitals();

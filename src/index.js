import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let api_url = "https://my-json-server.typicode.com/codificar/oficina/proposals";

function addBudget (budgets){
    ReactDOM.render(
            <App budgets={budgets} />,
            document.getElementById('root'));
}

function failReport(){
    ReactDOM.render(
            <App  />,
            document.getElementById('root'));
}

fetch(api_url)
        .then(response => {
            return response.json();
        })
        .then(data => addBudget(data));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';





// handleRegistration(e, obj) {
//   e.preventDefault();
//   // async handleLogout(){}
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-CSRFToken': Cookies.get('csrftoken'),
//     },
//     body: JSON.strigify(obj),
//   };
//
//   const handleError = (err) => console.warn(err);
//   const response = await fetch('/api/v1/rest-auth/registration/', options);
//   const data = await response.json().catch(handleError)
//
//   if(data.key) {
//     Cookies.set('Authorization', `Token ${data.key}`);
//   }
//
//
// }






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

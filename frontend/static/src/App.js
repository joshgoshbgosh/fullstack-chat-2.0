import React from 'react';
import './App.css';
import Cookies from 'js-cookie';
import RegisterForm from './components/RegisterForm';
import MessageForm from './components/MessageForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';

// import our register form




class App extends React.Component {


  render() {
    return(
      <div>
        <MessageForm />

      </div>
    )
  }
}

export default App;

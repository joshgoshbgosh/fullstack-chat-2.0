import React, { Component } from 'react';
import Cookies from 'js-cookie';
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',

    }

    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  async handleLogin(e) {
    e.preventDefault();
    // async handleLogout(){}
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(this.state),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/rest-auth/login/', options);
    const data = await response.json().catch(handleError)

    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }


  }

  render() {
    return(
      <form className="col-12" onSubmit={this.handleLogin}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleInput} name="username"/>
        </div>
        <div>
          <label>email</label>
            <input type="text"value={this.state.email} onChange={this.handleInput} name="email"/>
              </div>
                <div>
              <label>password1</label>
            <input type="text" value={this.state.password} onChange={this.handleInput} name="password"/>
          </div>
          <button type="submit">Submit</button>

        </form>
    )
  }

}

export default LoginForm;

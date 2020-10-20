import React, { Component } from 'react';
import Cookies from 'js-cookie';
class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleRegistration(e) {
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
    const response = await fetch('/api/v1/rest-auth/registration/', options);
    const data = await response.json().catch(handleError)

    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }


  }


render() {
  return(
    <form className="regfor" onSubmit={this.handleRegistration}>
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
        <input type="text" value={this.state.password1} onChange={this.handleInput} name="password1"/>
      </div>
      <div>
        <label>password2</label>
        <input type="text" value={this.state.password2} onChange={this.handleInput} name="password2"/>
      </div>
      <button type="submit">Submit</button>
    </form>

  )
}

}
export default RegisterForm;

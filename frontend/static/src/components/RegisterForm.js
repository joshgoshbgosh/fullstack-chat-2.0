import React, { Component } from 'react';

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
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value}):
  }


render() {
  return(
    <form className="col-12" onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
          <input type="text" value={this.state.username} onChange ={this.handleUserNameInput}/>
            </div>
              <div>
                <label>email</label>
                  <input type="text"value={this.state.email} onChange = {this.handleEmailInput}/>
                    </div>
                      <div>
                    <label>password1</label>
                  <input type="text" value={this.state.password1} onChange = {this.handlePassword1Input}/>
                </div>
              <div>
            <label>password2</label>
          <input type="text" value={this.state.password2} onChange = {this.handlePassword2Input}/>
        </div>
      <button type="submit">Submit</button>
    </form>

  )
}

}
export default RegisterForm;

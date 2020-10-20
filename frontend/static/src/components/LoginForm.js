import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password1: '',




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
                    <button type="submit">Submit</button>
                  </form>
                )
              }

              }

export default LoginForm;

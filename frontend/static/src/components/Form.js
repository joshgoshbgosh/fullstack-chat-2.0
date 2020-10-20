import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      body: '',
      password: '',

    }
  }


render() {
  return(
    <form className="col-12" onSubmit={this.handleSubmit}>
    <div>
    <label>Username</label>
    </div>
    <div>
    <label>Body</label>
    </div>

  )
}

}

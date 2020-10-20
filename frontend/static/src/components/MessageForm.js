import React, { Component } from 'react';
import Cookies from 'js-cookie';
class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content:'',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  async handleMessage(e) {
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
    const response = await fetch('api/v1/chats/', options);
    const data = await response.json().catch(handleError)

    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }


  }

  render() {
    return(
      <form className="col-12" onSubmit={this.handleMessage}>
        <div>
          <label>Body</label>
          <input type="text" value={this.state.content} onChange={this.handleInput} name="content"/>
        </div>
        <button>Post Message</button>
      </form>
    )
    }
  }

  export default MessageForm;

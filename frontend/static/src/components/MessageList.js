import React, { Component } from 'react';
import Cookies from 'js-cookie';
class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list : [],
    }



}

componentDidMount() {
  fetch("api/v1/chats").then(response => response.json())
  .then(data => {this.setState({list: data}); console.log( data )})
  .catch(error => console.log(error));
}


render() {

  const list = this.state.list.map(list => <li key={list.id}><p>{list.content}{list.user}</p></li>)

  return (
  <React.Fragment>
  <div className="col-12 col-md-6 mb-5">{list}</div>

  </React.Fragment>

  )
}
}

export default MessageList;

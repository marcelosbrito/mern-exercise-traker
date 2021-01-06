import React, { Component } from 'react';
import Axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    Axios.post('https://us-central1-portfolio-44c8a.cloudfunctions.net/app/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
        username: ''
    }); //after submit stay in the page so can submit another user
  }

  render() {
    return (
      <div>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername} />              
        </div>

        <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
        </div>

      </form>  
      </div> 
    )
  }
}
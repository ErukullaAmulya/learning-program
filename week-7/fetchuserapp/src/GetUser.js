// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data.results[0] });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <div>
            <h2>{user.name.title} {user.name.first}</h2>
            <img src={user.picture.large} alt="User" />
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    );
  }
}

export default Getuser;

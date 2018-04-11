import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="footer">
        <div className="links">
          <img alt="logo" id="bird" src={require('../img/bird.png')} />
          <h1><a href="http://www.craneworks.fi">Craneworks</a></h1>
        </div>
      </div>
    )
  }
}

export default Header;

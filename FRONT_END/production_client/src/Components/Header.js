import React, { Component } from 'react';
 
class Header extends Component {
    render() { 
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">Fluid jumbo heading</h1>
              <p className="lead">Jumbo helper text</p>
              <hr className="my-2" />
              <p>More info</p>
            </div>
            </div>
        );
    }
}
 
export default Header;
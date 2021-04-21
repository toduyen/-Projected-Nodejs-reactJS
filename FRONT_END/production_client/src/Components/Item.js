import React, { Component } from 'react';
 
class Item extends Component {
    render() { 
        return (
            <div className="col-4">
            <div className="card" style={{width: '18rem'}}>
              <img src={this.props.image} className="card-img-top" alt={this.props.image} />
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.price}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Item;
import React, { Component } from 'react';

class Delete extends Component {

  removeClicked = product => evt => {
    this.props.productClicked(product)
    fetch(`${process.env.REACT_APP_API_URL}/api/product/${product.id}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
        }
      })
      .then(resp => this.props.productDeleted(product))
      .catch(err => console.log(err))
}

  render(){
     return (
    <div className="Delete">
        <h1 onClick={this.removeClicked}>Delete</h1>
    </div>
  )}; 
  }


export default Delete; 
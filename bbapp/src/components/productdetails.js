import React, { Component } from 'react';

class ProductDetails extends Component {
    

    getDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/product/${this.props.product.id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': 'Token dca99d4c379d15ca26670aa8e396c981df44d927',
            }
          }).then(res => res.json())
          .then(resp => {this.props.updateProduct(resp)
            console.log(resp)})
          .catch(err => console.log(err))
        }
    
    render() {
        return(
        <div>
        <h6>Product Price</h6>
        { this.props.product ? (
            <h6>{this.props.product.name}</h6>
        ) : null }

        <div className="product-list-container" onClick={this.getDetails}>
            <h3>Price of Product</h3>

        </div>

        </div>
        )
    }
} 

export default ProductDetails; 
import React, { Component } from 'react';

class ProductDetails extends Component {
    

    getDetails = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/product/${this.props.product.id}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', 
              'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
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
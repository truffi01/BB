import React, { Component } from 'react';

class ProductDetails extends Component {
    render() {
        return(
        <div>
        <h6>Product Price</h6>
        { this.props.product ? (
            <h6>{this.props.product.name}</h6>
        ) : null }
        </div>
        )
    }
} 

export default ProductDetails; 
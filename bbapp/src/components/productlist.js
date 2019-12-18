import React from 'react';
import Delete from './delete';

function ProductList(props) {

    const productClicked = product => evt => {
        props.productClicked(product)
    }

    const removeClicked = product => evt => {
        props.productClicked(product)
        fetch(`${process.env.REACT_APP_API_URL}/api/product/${product.id}/`, {
            method: 'DELETE',
            headers: {
              'Authorization': 'Token dca99d4c379d15ca26670aa8e396c981df44d927',
            }
          })
          .then(resp => props.productDeleted(product))
          .catch(err => console.log(err))
    }

    const editClicked = product => evt => {
        props.editClicked(product)
    }

    const newProduct = () => {
        props.newProduct(); 
    }

    return(
        <div >
        {props.product.map(product => {
            return <div key={product.id} className="product-single"><h5  onClick={productClicked(product)}>{product.name}</h5>
        <h6 onClick={removeClicked(product)}>Delete</h6> 
        <h6 onClick={editClicked(product)}>Edit</h6>
        </div>

        })}
        <button onClick={newProduct}>Add New</button>
        </div>
    )
}

export default ProductList; 
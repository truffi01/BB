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
              'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
            }
          })
          .then(resp => props.productDeleted(product))
          .catch(err => console.log(err))
    }

    return(
        <div >
        {props.product.map(product => {
            return <div key={product.id}><h5  onClick={productClicked(product)}>{product.name}</h5>
        <h6 onClick={removeClicked(product)}>Delete</h6> 
        </div>

        })}
        
        </div>
    )
}

export default ProductList; 
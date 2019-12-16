import React from 'react';

function ProductList(props) {

  

    return(
        <div>
        <h4>Product List</h4>
        {props.product.map(product => {
            return <h5 key={product.id}>{product.name}</h5>
        })}
        </div>
    )
}

export default ProductList; 
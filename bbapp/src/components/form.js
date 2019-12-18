import React, { Component } from 'react';

class Form extends Component {

  state = {
    editedProduct: this.props.product, 
    product : [],
    productInfo: null, 
  }

  cancelClicked= () => {
    this.props.cancelForm(); 
  }

  inputChanged = event => {
    let product = this.state.editedProduct;
    product[event.target.name] = event.target.value;
    this.setState({
      editedProduct: product 
    });
  }

  savedClicked = () => {
    console.log(this.state.editedProduct); 
    fetch(`${process.env.REACT_APP_API_URL}/api/product/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Token dca99d4c379d15ca26670aa8e396c981df44d927'
      },
      body: JSON.stringify(this.state.editedProduct)
    }).then(res => res.json())
    .then(resp => this.props.newProduct(resp))
    .catch(err => console.log(err))
  }

  updateClicked = () => {
    console.log('saved');
    fetch(`${process.env.REACT_APP_API_URL}/api/product/${this.props.product.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Token dca99d4c379d15ca26670aa8e396c981df44d927'
      },
      body: JSON.stringify(this.state.editedProduct)
    }).then(res => res.json())
    .then(resp => this.props.editedProduct(resp))
    .catch(err => console.log(err)) 
  }

  render(){

    const disabled = this.state.editedProduct.name.length === 0 || this.state.editedProduct.description.length ===0



     return (
    <div className="Form">
        <h1>Form</h1>
        <span>Name of Product</span><br/>
        <input type="text" name ="name" value={this.props.product.name} onChange={this.inputChanged} /><br/>
        <span>Description</span><br/>
        <textarea name ="description" value={this.props.product.description} onChange={this.inputChanged}/><br/>
        {this.props.product.id ? <button disabled={disabled} onClick={this.updateClicked}>Update</button> : <button onClick={this.savedClicked} disabled={disabled} >Add to List</button> }
        
        <button onClick={this.cancelClicked}>Cancel</button>
    </div>
  )}

}


export default Form;

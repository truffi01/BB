import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';
import ProductDetails from './components/productdetails';
import Form from './components/form';

class App extends Component {

  state = {
    product : [],
    productInfo: null, 
    editedProduct: null, 
  }

  componentDidMount(){
    //fetch data from backend API 
    fetch(`${process.env.REACT_APP_API_URL}/api/product/`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
      }
    }).then(res => res.json())
    .then(resp => this.setState({product: resp}))
    .catch(err => console.log(err))
  }

  loadProduct = product => {
    this.setState({
      productInfo: product,
      editedProduct: null,  
    });
  }

  productDeleted = selProduct => {
    const products = this.state.product.filter(producty => producty.id !== selProduct.id);
    this.setState({
      product: products,
      productInfo: null, 
    })
  }

  editClicked = selProduct => {
    this.setState({
      editedProduct: selProduct
    })
  }

  newProduct = () => {
    this.setState({
      editedProduct: {name:'', description:''}
    })
  }


  render(){
     return (
    <div className="App">
        <h2>Basic Bid </h2>
        <div className="layout">
        <ProductList product={this.state.product} productClicked={this.loadProduct} productDeleted={this.productDeleted} editClicked={this.editClicked} newProduct={this.newProduct}/>
        <div>
          { !this.state.editedProduct ? ( <ProductDetails product={this.state.productInfo} updateProduct={this.loadProduct} />) : <Form product={this.state.editedProduct} />}
        
        </div>
        </div> 
    </div>
  )}; 
  }


export default App;

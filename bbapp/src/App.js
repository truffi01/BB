import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';
import ProductDetails from './components/productdetails';

class App extends Component {

  state = {
    product : [],
    productInfo: null, 
  }

  componentDidMount(){
    //fetch data from backend API 
    fetch(`http://127.0.0.1:8000/api/product/`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
      }
    }).then(res => res.json())
    .then(resp => this.setState({product: resp}))
    .catch(err => console.log(err))
  }

  render(){
     return (
    <div className="App">
        <h2>Basic Bid </h2>
        <div className="layout">
        <ProductList product={this.state.product}/>
        <ProductDetails product={this.state.productInfo} />
        </div> 
    </div>
  )}; 
  }


export default App;

import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';

class App extends Component {

  product = ['soap', 'cream']

  componentDidMount(){
    //fetch data from backend API 
    fetch(`/api/product`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
      }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render(){
     return (
    <div className="App">
        <h2>Basic Bid </h2>
        <ProductList product={this.product}/>
    </div>
  )}; 
  }


export default App;

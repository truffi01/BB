import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';

class App extends Component {

  product = ['soap', 'cream']

  componentDidMount(){
    //fetch data from backend API 
    fetch(`http://127.0.0.1:8000/api/product/`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 523ae3e1c535286e69ceda61d895fe88b777865e',
      }
    }).then(res => res.json())
    .then(resp => console.log(resp))
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

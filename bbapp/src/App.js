import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';

class App extends Component {

  product = ['soap', 'cream']

  componentDidMount(){
    //fetch data from backend API 
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

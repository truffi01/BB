import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';
import ProductDetails from './components/productdetails';
import Form from './components/form';
import { withCookies } from 'react-cookie';

class App extends Component {

  state = {
    product : [],
    productInfo: null, 
    editedProduct: null, 
    token: this.props.cookies.get('token')
  }

  componentDidMount(){
    //fetch data from backend API 
    if (this.state.token){
      fetch(`${process.env.REACT_APP_API_URL}/api/product/`, {
            method: 'GET',
            headers: {
              'Authorization': `Token ${this.state.token}`
            }
          })
          .then(res => {return res.json()})
          .then(resp => {
            console.log(resp);
            this.setState({product: resp})
          })
          .catch(err => console.log(err))
    } else {
      window.location.href='/';
    }
    
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

  cancelForm = () => {
    this.setState({
      editedProduct: null, 
    }) ;
  }

  addProduct = producty => {
    this.setState({
      product: [...this.state.product, producty]});
  }


  render(){
     return (
    <div className="App">
        <h2>Basic Bid </h2>
        <div className="layout">
        <ProductList product={this.state.product} productClicked={this.loadProduct} productDeleted={this.productDeleted} editClicked={this.editClicked} newProduct={this.newProduct} token={this.state.token}/>
        <div>
          { !this.state.editedProduct ? ( <ProductDetails product={this.state.productInfo} updateProduct={this.loadProduct} token={this.state.token} />) : <Form product={this.state.editedProduct} cancelForm={this.cancelForm} newProduct={this.addProduct} editedProduct={this.loadProduct} token={this.state.token}/>}
        
        </div>
        </div> 
    </div>
  )}; 
  }


export default withCookies(App);

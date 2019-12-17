import React, { Component } from 'react';

class Form extends Component {

  state = {
    product : [],
    productInfo: null, 
  }

  render(){
     return (
    <div className="Form">
        <h1>Form</h1>
        <span>Name of Product</span><br/>
        <input type="text" /><br/>
        <span>Description</span><br/>
        <textarea /><br/>
        <button>Add to List</button>
    </div>
  )}; 
  }


export default Form;

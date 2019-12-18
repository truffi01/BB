import React, { Component } from 'react'; 

class Login extends Component {

    state = {
        credentials: {
            username: "",
            password:"",
        }
    }

    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({
          credentials: cred 
        });
      }

      login = event => {
          console.log(this.state.credentials)
          fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(this.state.credentials)
          }).then(res => res.json())
          .then(resp => {
              console.log(resp.token);
              window.location.href ="/product";
          })
          .catch(err => console.log(err)) 
      }

    render(){
        return <div>
            <h2>Login</h2>
            <span>Username</span><br/>
            <input type="text" name ="username" value={this.state.credentials.username} onChange={this.inputChanged} /><br/>
            <span>Password</span><br/>
            <input type="password" name ="password" value={this.state.credentials.password} onChange={this.inputChanged} /><br/>
            <button onClick={this.login}>Login</button>
        </div>
    }
}


export default Login;
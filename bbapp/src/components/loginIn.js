import React, { Component } from 'react'; 
import { withCookies } from 'react-cookie';

class Login extends Component {

    state = {
        credentials: {
            username: "",
            password:"",
        },
        viewLogin: true, 
    }

    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({
          credentials: cred 
        });
      }

      login = event => {

          if (this.state.viewLogin){
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
                          this.props.cookies.set('token', resp.token)
                          window.location.href ="/product";
                      })
                      .catch(err => console.log(err)) 
          }else {
              console.log(this.state.credentials)
              fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', 
                },
                body: JSON.stringify(this.state.credentials)
              }).then(res => res.json())
              .then(resp => {
                this.setState({
                  viewLogin: true,
                })
              })
              .catch(err => console.log(err)) 
          }

          
      }

    toggleLogin = () => {
      this.setState({
        viewLogin: !this.state.viewLogin
      })
    }

    render(){
        return <div>
            <h2>
            {this.state.viewLogin ? 'Login': 'Register'}
              </h2>
            <span>Username</span><br/>
            <input type="text" name ="username" value={this.state.credentials.username} onChange={this.inputChanged} /><br/>
            <span>Password</span><br/>
            <input type="password" name ="password" value={this.state.credentials.password} onChange={this.inputChanged} /><br/>
            <button onClick={this.login}>{this.state.viewLogin ? 'Login': 'Register'}</button>

            <p onClick={this.toggleLogin}>{this.state.viewLogin ? 'Create Account': 'Login'} </p>
        </div>
    }
}


export default withCookies(Login);
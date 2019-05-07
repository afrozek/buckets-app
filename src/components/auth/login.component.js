import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component {

    

    constructor(props) {
      super(props);
      this.state = {
        title: "Login",
        submitted: false,
        buttonTitle: "Submit"
      };

      this.validateFields = this.validateFields.bind(this);
      this.sendLoginRequest = this.sendLoginRequest.bind(this);
      
    } // end constructor

    componentDidMount() {
      // axios.get(`https://jsonplaceholder.typicode.com/users`)
      //   .then(res => {
      //     const persons = res.data;
      //     this.setState({ persons });
      //   })
    }


    validateFields(event) {
      console.log("called validate");
      console.log(this.state);
      console.log(event.target.value);

    } // end validateFields

    sendLoginRequest(event) {
      event.preventDefault();
      this.setState({submitted: true});

      axios({
        method: 'post',
        url: 'http://localhost:3200/api/users/login',
        data: {
          email: 'afrozek95@gmail.com',
          password: 'khan41200'
        }
      })
        .then(res => {
          console.log(res);
          const persons = res.data;
          this.setState({ submitted: false });
        })
        .catch(err => {
          this.setState({ submitted: false });
          console.log(err);
          this.props.history.push('/auth/signup');

        });
    } // end sendLoginRequest



    

    render() {


        var loginButton;
        if(this.state.submitted)
          loginButton = <button className="btn-rounded-green" type="submit" onClick={this.sendLoginRequest}>Processing</button>;
        else
          loginButton = <button className="btn-rounded-green" type="submit" onClick={this.sendLoginRequest}>Login</button>;
    


  

      return (
        <div id="login-page">
          <div id="login-form" className="floating-form-container">
            <h1>Login</h1>
            <h2>title: {this.state.title}</h2>
            <form >
              <input type="text" placeholder="username" onChange={this.validateFields} />
              <input type="password" placeholder="password"/>
              <div className="text-center">
                {loginButton}
              </div>
            </form>
            <div className="text-center">
              <a href="">Sign Up</a>
            </div>
            
          </div>
          <div id="forgot">
            <a href="">Forgot Username or Password?</a>
          </div>
        </div>
      );
    }

    
  } // end login class
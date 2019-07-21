import React, { Component } from 'react';
import GoogleAuth from './googleAuth.component.js';
import axios from 'axios';
import * as log from "loglevel";




export default class Login extends Component {

    

  constructor(props) {
    super(props);
    this.state = {
      title: "Logins",
      submitted: false,
      buttonTitle: "Submit",
      loginError: null 
    };

    this.validateFields = this.validateFields.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.sendLoginRequest = this.sendLoginRequest.bind(this);
    this.loginErrorHandler = this.loginErrorHandler.bind(this);
    
  } // end constructor

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
  }


  validateFields(event) {
    log.debug("called validate");
    log.debug(this.state);
    log.debug(event.target.value);

  } // end validateFields

  loginSubmit(event) {
    log.debug("clicked login submit");
    event.preventDefault();

    this.setState({submitted: true});

    // reset login error
    this.setState({loginError: null});

    // send request after 2 seconds, 
    // just to illustrate the processing animation
    setTimeout(this.sendLoginRequest, 1000);
  }

  sendLoginRequest() {
    // event.preventDefault();
    // this.setState({submitted: true});
    // this.setState({loginError: null});

    axios({
      method: 'post',
      url: 'http://localhost:3200/api/users/login',
      data: {
        email: 'afrozek95@gmail.com',
        password: 'khan4120'
      }
    })
      .then(res => {
        const persons = res.data;
        this.setState({ submitted: false });
        this.props.history.push('/dashboard/home');
      })
      .catch(this.loginErrorHandler);
  } // end sendLoginRequest


  loginErrorHandler(err) {
    log.debug("err:", err);
    
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      log.debug("err.response:", err.response);
      err.displayMessage = err.response.data.error.message;
    } else if (err.request) {
      // The request was made but no response was received
      // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      log.debug(err.request);
      err.displayMessage = "No response from server";

    } else {
      // Something happened in setting up the request that triggered an Error
      log.debug('Error', err.message);
      err.message = "Login Error, :" + err.message;
    }


    this.setState({ 
      submitted: false,
      loginError: err.displayMessage
    });
    // this.setState({ loginError: "Login Error" });
    log.debug(err);
    // this.props.history.push('/auth/signup');

  }


    

    render() {


        let loginButton;
        if(this.state.submitted)
          loginButton = <button className="btn-rounded-green" type="submit" onClick={this.loginSubmit}>Processing</button>;
        else
          loginButton = <button className="btn-rounded-green" type="submit" onClick={this.loginSubmit}>Login</button>;

        let loginErrorView;
        if(this.state.loginError) {
          loginErrorView = <div className="text-danger text-center m-t-10 form-error-message">{this.state.loginError}</div>
        } else {
          loginErrorView = <div className="text-danger text-center m-t-10 form-error-message"></div>
        }


  

      return (
        <div id="login-page">
          <div id="login-form" className="floating-form-container">
            <h1>Login</h1>
            {/* <h2>title: {this.state.title}</h2> */}
            <form >
              <input type="text" placeholder="username" onChange={this.validateFields} />
              <input type="password" placeholder="password"/>
              <div className="text-center">
                {loginButton}
              </div>
              {loginErrorView}
            </form>
            <div className="text-center">
              <GoogleAuth />
            </div>
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
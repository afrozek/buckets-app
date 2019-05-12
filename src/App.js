import React, { Component } from 'react';

import { connect, Provider } from 'react-redux';

import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import { setVersion } from './actions/actions.js';
import { bindActionCreators } from 'redux';


import Auth from './components/auth/auth.page.component';
import Login from './components/auth/login.component';
import Signup from './components/auth/signup.component';


class Hello extends React.Component {
    render() { return <div> hello </div>}
  }
  
  class Goodbye extends React.Component {
    render() { return <div>Good bye </div> }
  }






 
class Root extends Component {
    render() {
        return (
       
        <BrowserRouter>
            <div>
              {/* <h1>hi 2</h1>
              <h2>version: {this.props.settings.version} </h2>
              <h2>loggedIn: {this.props.auth.loggedIn} </h2>
              <button className="btn btn-success" onClick={() => this.props.setVersion('6')}>change version</button>
            <ul>
                  <li><Link to="/hello">About</Link></li>
                  <li><Link to="/goodbye">Repos</Link></li>
                  <li><Link to="/auth">auth</Link></li>
                  <li><Link to="/auth/login">login</Link></li>
                  <li><Link to="/auth/signup">signup</Link></li>
                  
            </ul>
                <hr/> */}
                <Switch>
                  <Route exact path="/" >
                    <Redirect to="/auth/login"/>
                  </Route>
                  <Route path="/hello" component={Hello} />
                  <Route path="/goodbye" component={Goodbye} />
                  <Route path="/auth" >
                    
                    <Auth>
                      <Route path="/auth/login" component={Login} />
                      <Route path="/auth/signup" component={Signup} />
                    </Auth>
                   
                  </Route>
              </Switch>
            </div>            
          </BrowserRouter>
         
      )}
} // end class




function mapStateToProps(state) {
    return {
        settings: state.settings,
        auth: state.auth
    }
}

// anything returned from this will end up as props on this container

function mapDispatchToProps(dispatch) {

    // sends to all reducers
    return bindActionCreators({setVersion: setVersion}, dispatch);
}

// promotes to a container
export default (connect(mapStateToProps, mapDispatchToProps)(Root));

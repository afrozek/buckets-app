import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './authPage.scss';
import logoBuckets from "../../assets/images/logoBuckets.svg";

import { setVersion } from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'





class Auth extends Component {


  render() {
    console.log(this.props);

    return (
      <div id="auth-page" className="container-fluid">
        <div  className="container">
          <div className="row">
            <div className="col-md-12">
            
              <img
                id="buckets-logo"
                src={logoBuckets}
                alt={logoBuckets}
                className="buckets-logo-8x"
              />
              
              
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

      // end container
    );
  }
} // end auth class

function mapStateToProps(state) {
  return {
      settings: state.settings
  }
}

export default withRouter(connect(mapStateToProps)(Auth))

// promotes to a container
// export default (connect(mapStateToProps)(Auth));

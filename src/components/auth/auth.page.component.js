import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './authPage.scss';
import logoBuckets from "../../assets/images/logoBuckets.svg";

import { setVersion } from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';






class Auth extends Component {


  render() {
    console.log(this.props);

    return (
      <Container id="auth-page" fluid>
        <Container>
          <Row>
            <Col md="12">
            
              <img
                id="buckets-logo"
                src={logoBuckets}
                alt={logoBuckets}
                className="buckets-logo-8x"
              />
              
              
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </Container>

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

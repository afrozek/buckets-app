import React, { Component } from 'react';
import * as log from 'loglevel';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {

    // component got rendered
    componentDidMount() {
        log.info("componentDidMount called");
        this.shouldNavigateAway()
      } 
      // end componentDidMount
    
      // component got updated
      componentDidUpdate() {
        log.info("componentDidUpdate called");
        this.shouldNavigateAway();
      }
      // end componentDidUpdate
    
      shouldNavigateAway() {
        log.info("shouldNavigateAway called");
        if(!this.props.isLoggedIn) {
          log.info("Not Logged In, Navigate Away");
          this.props.history.push('/');
        }
      }


        render() {
            // !IMPORTANT to pass down this.props like so:
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authReducer: state.authReducer,
            isLoggedIn: state.authReducer.isLoggedIn
        }
      }

    return connect(mapStateToProps)(ComposedComponent);
}


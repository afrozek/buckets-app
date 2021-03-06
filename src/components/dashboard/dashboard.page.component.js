import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import requireAuth from '../auth/requireAuth';

import './dashboard.scss';
import logoBuckets from "../../assets/images/logoBuckets.svg";
import homeGreenIcon from "../../assets/images/home-green-icon.svg";
import fadedGreySearchIcon from "../../assets/images/search-faded-grey-icon.svg";
import GoogleAuth from "../auth/googleAuth.component";

import DashboardSidebar from './dashboard-sidebar.component';

import { fetchTransactions } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as log from 'loglevel';







class Dashboard extends Component {
  
  componentDidMount() {
        
    // Do the initial fetching of data in this lifecycle method
    
    setTimeout(()=> {
        this.props.fetchTransactions().then(() => {
            log.debug("loaded all transactions");
            // this.setState({loaded: true});
        });
    }, 2000)

    

    log.debug("guides from component: ", this.props.items);
}


  


  render() {
    console.log(this.props);

    return (
      <div id="dashboard-page" className="container-fluid d-flex" >
          <div className="row flex-fill p-t-30">
            <div className="col-md-2">
            
              {/* <div className="centerText"> */}
              <img
                id="buckets-logo"
                src={logoBuckets}
                alt={logoBuckets}
                className="buckets-logo-6x"
              />
              {/* </div> */}

              <div className="sidebar-container">
                  <ul className="sidebar-nav">
                      <li>
                          <a href="">
                              <span className="icon-small">
                                <img src={homeGreenIcon} alt=""/>
                              </span>
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="">
                              <span className="icon-small">

                              </span>
                              Demo
                          </a>
                      </li>
                      <li>
                          <a href="">
                              <span className="icon-small">

                              </span>
                              Budgets
                          </a>
                      </li>
                  </ul>
              </div>
              
              
              
            </div>
            <div className="col-md-10">
                {/* Start Top Nav  */}
              <nav id="top-nav-fixed" className="navbar navbar-expand-lg navbar-light">
                {/* <a className="navbar-brand" href="#">
                  <img src="/assets/images/lantern-white-logo.svg" alt="Lantern"/>
                </a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="form-inline my-2 my-lg-0">
                        <div className="search-input-container m-r-10">
                            <img src={fadedGreySearchIcon}/>                           
                            <input type="text" placeholder="search" />
                        </div>
                  </form>
                  <ul className="navbar-nav ">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>

                </div>
              </nav>
              {/* End Top Nav */}
              <GoogleAuth />
                body
                transactions:{JSON.stringify(this.props.transactions)}
               
                <DashboardSidebar sidebar={this.props.sidebar}/>
                {this.props.children}
            </div>
          </div>
      </div>

      // end container
    );
  }
} // end auth class

function mapStateToProps(state) {
  return {
      settings: state.settings,
      sidebar: state.dashboardSidebar,
      transactions: state.transactionsReducer
  }
}

export default withRouter(connect(mapStateToProps, {fetchTransactions})(requireAuth(Dashboard)))

// promotes to a container
// export default (connect(mapStateToProps)(Dashboard));

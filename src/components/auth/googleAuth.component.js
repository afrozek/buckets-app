import React from "react";
import * as log from "loglevel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { red, white } from "ansi-colors";

library.add(fab);

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Google OAuth2 Component",
      loggedIn: null
    };
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      log.info("Google API OAuth2 CB");

      // returns a promise
      window.gapi.client
        .init({
          clientId:
            "28500267218-1bq13u7pl94iui84bhg11u97p9fuapbs.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          log.debug("this.auth: ", this.auth);
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  } // end componentDidMount

  onAuthChange = () => {
    this.setState({ loggedIn: this.auth.isSignedIn.get() });
  };

  onLoginClick = () => {
    this.auth.signIn();
  }; // end onLoginClick

  onLogoutClick = () => {
    this.auth.signOut();
  }; // end onLogoutClick

  renderGoogleButton() {
    let styles = {
      buttonStyle: {
        // background: "red",
        color: "white",
        fontSize: "12px"
      }
    };

    
    if (this.state.loggedIn) {
      return (
          <button
          className="btn btn-md  bg-danger google-signin"
          style={styles.buttonStyle} 
          onClick={this.onLogoutClick}
        >
          <FontAwesomeIcon icon={["fab", "google"]} />Logout
        </button>
      )
    } else {
      return (
        <button
          className="btn btn-md  bg-danger google-signin"
          style={styles.buttonStyle}
          onClick={this.onLoginClick}
        >
          <FontAwesomeIcon icon={["fab", "google"]} /> Sign in with Google
        </button>
      );
    }
  } // end renderGoogleButton

  render() {
    
    return (
      <div>
        <div>{this.renderGoogleButton()}</div>
      </div>
    );
  } // end render
} // end class GoogleAuth

export default GoogleAuth;

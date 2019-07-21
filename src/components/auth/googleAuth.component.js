import React from 'react';
import * as log from "loglevel";

class GoogleAuth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Google OAuth2 Component",
            loggedIn: false
        }
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            log.info("Google API OAuth2 CB");

            // returns a promise
            window.gapi.client.init({
                clientId: "28500267218-1bq13u7pl94iui84bhg11u97p9fuapbs.apps.googleusercontent.com",
                scope: "email"
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                log.debug("this.auth: ", this.auth);
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

    } // end componentDidMount


    onAuthChange = () => {
        this.setState({loggedIn: this.auth.isSignedIn.get()})
    }

    render() {
        return <div>Title: {this.state.title} : {this.state.loggedIn.toString()} </div>;
    } // end render

} // end class GoogleAuth

export default GoogleAuth;
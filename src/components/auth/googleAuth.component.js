import React from 'react';
import * as log from "loglevel";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            log.info("Google API OAuth2 CB");
            window.gapi.client.init({
                clientId: "28500267218-1bq13u7pl94iui84bhg11u97p9fuapbs.apps.googleusercontent.com",
                scope: "email"

            })
        });

    } // end componentDidMount

    render() {
        return <div>Google Auth</div>;
    } // end render

} // end class GoogleAuth

export default GoogleAuth;
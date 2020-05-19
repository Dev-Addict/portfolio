import auth0 from 'auth0-js';

class Auth0Client {
    auth0 = new auth0.WebAuth({
        domain: 'dev-ajkpwfyj.auth0.com',
        clientID: '55ZCUrCZzI6tHOZtaoazlt2uJ0GJ3Av1',
        redirectUri: 'http://127.0.0.1:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login = () => {
        this.auth0.authorize();
    };

    handleAuthentication = () => {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                }
            })
        });
    };

    setSession = token => {};
}

const auth0Client = new Auth0Client();

export default auth0Client;
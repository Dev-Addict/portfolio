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
    }
}

const auth0Client = new Auth0Client();

export default auth0Client;
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

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

    setSession = authResult => {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    };

    logout = () => {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');
        this.auth0.logout({
            returnTo: '',
            clientID: '55ZCUrCZzI6tHOZtaoazlt2uJ0GJ3Av1'
        });
    };

    isAuthenticated = () => {
        const expiresAt = Cookies.get('expiresAt');
        return new Date().getTime() < expiresAt;
    };
}

const auth0Client = new Auth0Client();

export default auth0Client;
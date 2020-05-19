import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jsonWebToken from 'jsonwebtoken';
import axios from 'axios';

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

    clientAuth = async () => {
        const token = Cookies.getJSON('jwt');
        return await this.verifyToken(token);
    };

    serverAuth = async req => {
        if (req.headers.cookies) {
            const jwtCookie = req.headers.cookie.split(';')
                .find(c => c.trim().startsWith('jwt='));
            if (jwtCookie) {
                const token = jwtCookie.split('=')[1];
                return await this.verifyToken(token);
            }
            return undefined;
        }
    };

    verifyToken = async token => {
        const decodedToken = jsonWebToken.decode(token, {complete: true});

        if (!decodedToken) {
            return undefined;
        }

        const jwks = await this.getJWKS();
        const jwk = jwks.keys[0];
        const cert =
            `-----BEGIN CERTIFICATE-----\n${jwk.x5c[0].match(/.{1,64}/g).join('\n')}\n-----END CERTIFICATE-----\n`;

        if (jwk.kid === decodedToken.header.kid) {
            try {
                const verifiedToken = jsonWebToken.verify(token, cert);

                const expiresAt = verifiedToken.exp * 1000;

                return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
            } catch (err) {
                return undefined;
            }
        }
        return undefined;
    };

    getJWKS = async () => {
        try {
            const res = await axios.get('https://dev-ajkpwfyj.auth0.com/.well-known/jwks.json');
            return res.data;
        } catch(err) {
            console.log({...err});
        }
    };
}

const auth0Client = new Auth0Client();

export default auth0Client;
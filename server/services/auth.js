const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-ajkpwfyj.auth0.com/.well-known/jwks.json'
    }),
    audience: '55ZCUrCZzI6tHOZtaoazlt2uJ0GJ3Av1',
    issuer: 'https://dev-ajkpwfyj.auth0.com/',
    algorithms: ['RS256']
});
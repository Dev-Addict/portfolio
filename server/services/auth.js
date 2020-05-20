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

exports.checkRole = (role) => (req, res, next) => {
    const user = req.user;

    if (user && user['http://localhost:3000/role'].includes(role)) {
        return next();
    }
    res.status(401).json({
        status: 'err',
        message: `You Need To Be ${role} To Use This Route. ${err.message}`
    });
};
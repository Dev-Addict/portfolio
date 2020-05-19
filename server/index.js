const express = require('express');
const next = require('next');

const routes = require('../routes');
const auth = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                res.status(401).json({
                    status: 'err',
                    message: `You Need To Be Authorized To Use This Route. ${err.message}`
                });
            }
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        })
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });
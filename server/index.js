const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const next = require('next');

const routes = require('../routes');
const portfolioRouter = require('./routes/portfolioRouter');
const auth = require('./services/auth');
const errorController = require('./controllers/errorController');

dotenv.config({
    path: path.join(__dirname, '../config.env')
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = routes.getRequestHandler(app);

app.prepare()
    .then(() => {
        const server = express();

        server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "*");
            next();
        });

        server.use('/api/v1/portfolios', auth.checkJWT, auth.checkRole('admin'), portfolioRouter);

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.use(errorController);

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });

        const DB =
            process.env.DATABASE
                .replace('<password>', process.env.DATABASE_PASSWORD);

        mongoose.connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }).then(con => {
            console.log('Connected to DB successfully.');
        });
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });
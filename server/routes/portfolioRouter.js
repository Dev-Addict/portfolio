const express = require('express');

const portfolioController = require('../controllers/portfolioController');
const auth = require('../services/auth');

const router = express.Router();

router.route('/')
    .get(portfolioController.getPortfolios)
    .post(auth.checkJWT, auth.checkRole('admin'), portfolioController.createPortfolio);
router.route('/:id')
    .get(portfolioController.getPortfolio)
    .patch(auth.checkJWT, auth.checkRole('admin'), portfolioController.updatePortfolio)
    .delete(auth.checkJWT, auth.checkRole('admin'), portfolioController.deletePortfolio);

module.exports = router;
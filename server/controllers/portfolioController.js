const Portfolio = require('../models/Portfolio');
const factory = require('./handlerFactory');

exports.getPortfolios = factory.getAll(Portfolio);

exports.getPortfolio = factory.getOne(Portfolio);

exports.createPortfolio = factory.createOne(Portfolio);

exports.updatePortfolio = factory.updateOne(Portfolio);

exports.deletePortfolio = factory.deleteOne(Portfolio);
import Cookies from 'js-cookie';

import {getCookieFromReq} from '../utils';
import portfolioApi from '../api/portfolio';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if (token) {
        return {headers: {'authorization': `Bearer ${token}`}};
    }

    return undefined;
};

export const getPortfolios = async () =>
    await portfolioApi.get('/portfolios');

export const createPortfolio = async portfolio =>
    await portfolioApi.post('/portfolios', portfolio, setAuthHeader());

export const getPortfolio = async id =>
    await portfolioApi.get(`/portfolios/${id}`);

export const updatePortfolio = async (portfolio, id) =>
    await portfolioApi.patch(`/portfolios/${id}`, portfolio, setAuthHeader());
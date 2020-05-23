import Cookies from 'js-cookie';

import {getCookieFromReq} from '../utils';
import portfolioApi from '../api/portfolio';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if (token) {
        return { headers: {'authorization': `Bearer ${token}`}};
    }

    return undefined;
};

export const getPortfolios = async () => {
    return await portfolioApi.get('/portfolios')
};

export const createPortfolio = async (portfolio) => {
    return await portfolioApi.post('/portfolios', portfolio, setAuthHeader());
};
import axios from 'axios';
import Cookies from 'js-cookie';

import {getCookieFromReq} from '../utils';

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if (token) {
        return { headers: {'authorization': `Bearer ${token}`}};
    }

    return undefined;
};

export const getPortfolios = async (req) => {
    return await axios.get('http://localhost:3000/api/v1/portfolios', setAuthHeader(req))
};
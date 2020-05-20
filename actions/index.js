import axios from 'axios';
import Cookies from 'js-cookie';

export const setAuthHeader = () => {
    const token = Cookies.getJSON('jwt');

    if (token) {
        return {
            headers: {
                'authorization': `Bearer ${Cookies.getJSON('jwt')}`
            }
        };
    }

    return undefined;
};
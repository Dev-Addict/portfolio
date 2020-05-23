import axios from 'axios';

const portfolio = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/v1',
    timeout: 3000
});

export default portfolio;
import axios from 'axios';
import env from '../env/environment';

const http = axios.create({
    baseURL: env.baseUrl,
    responseType: 'json',
});

export default http;
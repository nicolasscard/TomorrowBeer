import axios from 'axios';
import { baseURL } from '../constants/punkApi';

export const punkApiRequest = axios.create({
    baseURL: baseURL,
});

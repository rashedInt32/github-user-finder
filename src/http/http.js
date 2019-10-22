import axios from 'axios';

import { config } from '../config/config';

/**
 * Axios instance
 * @desc creates axios instace so that
 * if anything need to change or add like custom header
 * can be done by changing only this file
 */
const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

export { http };

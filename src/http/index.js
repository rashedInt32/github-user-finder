import axios from 'axios';

import { config } from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" }
});

export { http };

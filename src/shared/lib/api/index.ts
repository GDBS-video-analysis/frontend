import { API_URL } from '@shared/constants/default-values';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

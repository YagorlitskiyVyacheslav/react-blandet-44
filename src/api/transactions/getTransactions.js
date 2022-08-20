import { getApiTransactions } from 'mockApi/getApiTransactions';

import { api } from './api';

export const getTransactions = () => api.get(getApiTransactions);

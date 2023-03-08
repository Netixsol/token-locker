import { createStore } from 'redux';
import { token } from '@/state/reducers/token';

export const store: any = createStore(token);

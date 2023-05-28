import { createAction } from '@ngrx/store';
import { IAuthStore } from '../models/models';


export const setNewUser = createAction('[AUTH COMPONENT] SET NEW USER DATA', (userData: Omit<IAuthStore, 'isAuth'>) => ({userData}));
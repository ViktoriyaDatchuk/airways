import { createAction } from '@ngrx/store';
import { IAuthStore } from '../models/models';


export const setNewUser = createAction('[AUTH COMPONENT] SET NEW USER DATA', (userData: Omit<IAuthStore, 'isAuth' | 'isAuthWindowOpen'>) => ({userData}));
export const setIsAuth = createAction('[AUTH COMPONENT] SET AUTH USER', (isAuth: boolean) => ({isAuth}));
export const setIsAuthOpenWindow = createAction('[AUTH COMPONENT] SET AUTH WINDOW OPEN', (isAuthWindowOpen: boolean) => ({isAuthWindowOpen}));
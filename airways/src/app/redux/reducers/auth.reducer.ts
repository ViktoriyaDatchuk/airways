import { createReducer, on } from '@ngrx/store';
import { IAuthStore } from '../models/models';
import {setIsAuth, setIsAuthOpenWindow, setNewUser} from '../actions/auth.actions'

export const initialState: IAuthStore = {
    email: '',
    birthday: '',
    citizenship: '',
    countryCode: '',
    lastName: '',
    name: '',
    phone: '',
    sex: '',
    isAuth: false,
    isAuthWindowOpen: false,
};

export const authReducer = createReducer(
  initialState,
  on(setNewUser, (state, { userData }) => ({
    ...state,
    ...userData,
  })),
  on(setIsAuth, (state, { isAuth }) => ({
    ...state,
    isAuth,
  })),
  on(setIsAuthOpenWindow, (state, { isAuthWindowOpen }) => ({
    ...state,
    isAuthWindowOpen,
  })),
)
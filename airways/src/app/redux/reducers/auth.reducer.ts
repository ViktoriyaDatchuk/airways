import { createReducer, on } from '@ngrx/store';
import { IAuthStore } from '../models/models';
import {setNewUser} from '../actions/auth.actions'

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
};

export const authReducer = createReducer(
  initialState,
  on(setNewUser, (state, { userData }) => ({
    ...state,
    ...userData,
  })),
)
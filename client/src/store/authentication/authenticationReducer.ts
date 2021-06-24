import {
  AuthenticationActions,
  AuthenticationActionTypes,
} from './authenticationActions';
import { Reducer } from 'redux';
import jwt_decode from 'jwt-decode';
export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface AuthenticationState {
  token: string;
  user: IUser | null;
  loading: boolean;
  error: String | null;
}

const initialState = () => {
  const token = localStorage.getItem('access-token') || '';
  const { user }: { user: IUser } = jwt_decode(token);
  return {
    token,
    user,
    loading: false,
    error: null,
  }
};

export const AuthenticationReducer: Reducer<
  AuthenticationState,
  AuthenticationActions
> = (state = initialState(), action) => {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_SUCCESS:
      localStorage.setItem('access-token', action.payload.token);
      const response: { user: IUser } = jwt_decode(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: response.user,
        loading: false,
      };

    case AuthenticationActionTypes.LOGOUT:
      localStorage.removeItem('access-token');
      return { ...state, token: '', user: null };

    default:
      return state;
  }
};

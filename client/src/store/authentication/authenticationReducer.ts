import { AuthenticationActions, AuthenticationActionTypes } from './authenticationActions';
import { Reducer } from 'redux';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthenticationState {
  token: string;
  user: User;
  loading: boolean;
  error: String | null;
}

const initialState = {
  token: '',
  user: {} as User,
  loading: false,
  error: null,
};

export const AuthenticationReducer: Reducer<AuthenticationState, AuthenticationActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthenticationActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

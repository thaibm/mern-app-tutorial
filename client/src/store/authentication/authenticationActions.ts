import { ILoginFormInputs } from './../../components/LoginForm';
import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootActions, RootState } from '../index';
import { Dispatch } from 'redux';
import API from '../../core/api';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum AuthenticationActionTypes {
  LOGOUT = 'LOGOUT',
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

export interface ILoginResponse {
  token: string;
  message: string;
}

interface ICreateLogout {
  type: AuthenticationActionTypes.LOGOUT;
}
interface ICreateLogin {
  type: AuthenticationActionTypes.LOGIN;
}

interface ICreateLoginSuccess {
  type: AuthenticationActionTypes.LOGIN_SUCCESS;
  payload: ILoginResponse;
}

interface ICreateLoginFail {
  type: AuthenticationActionTypes.LOGIN_FAIL;
  error: any;
}

export const loginAction =
  (payload: ILoginFormInputs): ThunkResult<void> =>
  async (dispatch) => {
    handleCreateLogin(dispatch);
    try {
      const response: AxiosResponse<any> = await API.post(`/login`, {
        email: payload.email,
        password: payload.password,
      });
      handleCreateLoginSuccess(dispatch, response.data);
    } catch (error) {
      handleCreateLoginFail(dispatch, error);
    }
  };

const handleCreateLogin = (dispatch: Dispatch<ICreateLogin>) => {
  dispatch({ type: AuthenticationActionTypes.LOGIN });
};

const handleCreateLoginSuccess = (
  dispatch: Dispatch<ICreateLoginSuccess>,
  response: ILoginResponse
) => {
  dispatch({
    type: AuthenticationActionTypes.LOGIN_SUCCESS,
    payload: response,
  });
};

const handleCreateLoginFail = (
  dispatch: Dispatch<ICreateLoginFail>,
  error: any
) => {
  dispatch({ type: AuthenticationActionTypes.LOGIN_FAIL, error });
};

// Logout
export const logoutAction = (): ThunkResult<void> => async (dispatch) => {
  console.log(
    '🚀 ~ file: authenticationActions.ts ~ line 64 ~ logoutAction ~ dispatch',
    dispatch
  );
};

// Logins Action type
export type AuthenticationActions =
  | ICreateLogin
  | ICreateLoginSuccess
  | ICreateLoginFail
  | ICreateLogout;

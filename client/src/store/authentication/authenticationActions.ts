import { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootActions, RootState } from '../index';
import { Dispatch } from 'redux';
import API from '../../core/api';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;

export enum AuthenticationActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
}

interface ICreateLogin {
  type: AuthenticationActionTypes.LOGIN;
}

interface ICreateLoginSuccess {
  type: AuthenticationActionTypes.LOGIN_SUCCESS;
  payload: string;
}

interface ICreateLoginFail {
  type: AuthenticationActionTypes.LOGIN_FAIL;
  error: any;
}

export const loginAction = (
  payload: string,
  successCallback: () => void
): ThunkResult<void> => async (dispatch) => {
  handleCreateLogin(dispatch);
  try {
    const response: AxiosResponse<any> = await API.post(`/login`, payload);
    handleCreateLoginSuccess(dispatch, response.data);
    successCallback();
  } catch (error) {
    handleCreateLoginFail(dispatch, error);
  }
};

const handleCreateLogin = (dispatch: Dispatch<ICreateLogin>) => {
  dispatch({ type: AuthenticationActionTypes.LOGIN });
};

const handleCreateLoginSuccess = (
  dispatch: Dispatch<ICreateLoginSuccess>,
  response: any
) => {
  dispatch({ type: AuthenticationActionTypes.LOGIN_SUCCESS, payload: response });
};

const handleCreateLoginFail = (
  dispatch: Dispatch<ICreateLoginFail>,
  error: any
) => {
  dispatch({ type: AuthenticationActionTypes.LOGIN_FAIL, error });
};


// Logins Action type
export type AuthenticationActions = ICreateLogin | ICreateLoginSuccess | ICreateLoginFail;

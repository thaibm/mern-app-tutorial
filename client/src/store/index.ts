import { AuthenticationActions } from './authentication/authenticationActions';
import { AuthenticationReducer, AuthenticationState } from './authentication/authenticationReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

export interface RootState {
  readonly authentication: AuthenticationState;
}

const rootReducer = combineReducers<RootState>({
  authentication: AuthenticationReducer,
});

export type RootActions = AuthenticationActions; // | CommentsAction | etc.

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
  )
);

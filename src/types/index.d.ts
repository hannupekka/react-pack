import { Dispatch } from 'react-redux';
import { Action } from 'redux';

export interface IRepo {
  fork: boolean;
  html_url: string;
  id: string;
  name: string;
  owner: string;
}

export interface IUser {
  email: string;
  login: string;
}

export interface IUIState {
  showGreeting: boolean;
}

export interface IUserState {
  isLoading: boolean;
  isError: boolean;
  users: Array<IUser>;
}

export interface IRepoState {
  isLoading: boolean;
  isError: boolean;
  showForks: boolean;
  entities: {
    repos: {
      [id: string]: IRepo;
    };
    users: {
      [id: string]: IUser;
    };
  };
  result: Array<String>;
}

export interface IRootState {
  repos: IRepoState;
  ui: IUIState;
  users: IUserState;
}

export type TDispatch = Dispatch<Action>;

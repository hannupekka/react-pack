// Redux
declare type ThunkAction = {
  +type: string,
  +payload: Object
}

declare type UiState = {
  +showGreeting: boolean
};

declare type ReposState = {
  +isLoading: boolean,
  +isError: boolean,
  +showForks: boolean,
  +entities: {
    +repos: Object,
    +users: Object
  },
  +result: Array<Number>
};

declare type UsersState = {
  +isLoading: boolean,
  +isError: boolean,
  +users: Array<Object>
}

declare type RootState = {
  +repos: ReposState,
  +ui: UiState,
  +users: UsersState,
  +router: Object
}

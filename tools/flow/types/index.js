// Redux
declare type ThunkAction = {
  +type: string,
  +payload: Object
}

declare type State = {
  +repos: Object,
  +ui: Object,
  +router: Object
}

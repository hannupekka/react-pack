import { Map } from 'immutable';

// Redux
declare type ThunkAction = {
  +type: string,
  +payload: Object
}

declare type State = {
  +repos: Map<string, any>,
  +ui: Map<string, any>,
  +router: Object
}

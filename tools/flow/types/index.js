// CSS Modules
declare module 'react-css-modules' {

  declare type CssOptions = {
    allowMultiple?: boolean,
    errorWhenNotFound?: boolean,
  };

  declare type FunctionComponent<P> = (props: P) => ?React$Element<any>;
  declare type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;

  declare function exports<D, P, S, C: ClassComponent<D, P, S> | FunctionComponent < P >> (reactClass: C, styles: Object, cssOptions ?: CssOptions): C;
}

// Redux
declare type Action = {
  +type: string,
  +payload: Object
}

// API middleware
declare type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS';

declare type RequestType = {
  type: string | Symbol,
  payload?: any,
  meta?: any
}

declare type ApiMiddlewareRequest = {
  [CALL_API: Symbol]: Object
}

declare type ApiMiddlewareRequestParams = {
  endpoint: string | Function,
  method: HTTPMethod,
  types: Array<string | RequestType | Symbol>,
  body?: string | Object,
  headers?: Object | Function,
  credentials?: string,
  bailout?: boolean | Function
}

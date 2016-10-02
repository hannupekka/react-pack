declare type HTTPMethodType =
  | 'POST'
  | 'GET'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

declare type RequestTypesType =
  | string
  | Object;

declare type ApiMiddlewareRequestType = {
  [CALL_API: Symbol]: Object
}

declare type ApiMiddlewareRequestParamsType = {
  method: HTTPMethodType,
  endpoint: string,
  types: Array<RequestTypesType>
}

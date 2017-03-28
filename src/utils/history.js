// @flow
import { useRouterHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';

let historyInstance: ?Object = null;

export default function getHistoryInstance(): Object {
  if (!historyInstance) {
    historyInstance = useRouterHistory(createHistory)();
  }

  return historyInstance;
}

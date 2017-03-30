// @flow;
import createHistory from 'history/createBrowserHistory';

let historyInstance: ?Object = null;

export default function getHistoryInstance(): Object {
  if (!historyInstance) {
    historyInstance = createHistory();
  }

  return historyInstance;
}

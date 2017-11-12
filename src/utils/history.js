import createHistory from 'history/createBrowserHistory';

let historyInstance = null;

export default function getHistoryInstance() {
  if (!historyInstance) {
    historyInstance = createHistory();
  }

  return historyInstance;
}

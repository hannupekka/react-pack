import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from '@app/containers/utils/Routes';
import { Store } from 'react-redux';
import { History } from 'history';
import { IRootState } from '@app/types';

interface Props {
  store: Store<{} | undefined>;
  history: History;
}

export const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store'

export const ReduxProvider = Component => {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};
 
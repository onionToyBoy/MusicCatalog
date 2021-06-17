import React from 'react';
import { Provider } from 'react-redux';
import { NotificationWrapper } from '../modules/Notifications/components/NotificationWrapper';
import { store } from './store';

export const ReduxProvider = Component => {
  return props => (
    <Provider store={store}>
      <NotificationWrapper>
        <Component {...props} />
      </NotificationWrapper>
    </Provider>
  );
};

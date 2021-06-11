import { createStore, applyMiddleware, compose } from 'redux';
import { reactotron } from '../../ReactotronConfig';
import ReduxThunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), reactotron.createEnhancer()),
);

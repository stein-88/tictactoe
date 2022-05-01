import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';
import rootSaga from './sagas';
import rootEpic from './epics';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [sagaMiddleware, epicMiddleware, thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(...enhancers),
  );

  sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;

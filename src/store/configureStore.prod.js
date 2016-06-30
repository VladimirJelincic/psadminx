/**
 * Created by Vladimir on 22/06/16.
 */
/**
 * Created by Vladimir on 22/06/16.
 */
import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

/**
 * Created by Vladimir on 22/06/16.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress

});

export default rootReducer;


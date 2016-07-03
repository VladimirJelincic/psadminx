/**
 * Created by Vladimir on 22/06/16.
 */
import * as types from './actionTypes';

export function beginAjaxCall() {
  console.log('return type: BEGIN AJAX')
  return {

    type: types.BEGIN_AJAX_CALL
  };
}
export function ajaxCallError() {
  return {
    type: types.AJAX_CALL_ERROR
  };
}

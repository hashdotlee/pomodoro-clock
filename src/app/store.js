import {createStore, combineReducers} from 'redux';
import breakReducer from './break';
import sessionReducer from './session'

const reducer = combineReducers({
  break:breakReducer,
  session:sessionReducer
});

const store = createStore(reducer);

export default store
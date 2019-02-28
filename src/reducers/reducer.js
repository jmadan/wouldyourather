import { combineReducers } from 'redux';
import AppContext from './appReducer';
import Questions from './questionReducer';
import Users from './userReducer';

const reducer = combineReducers({AppContext, Questions, Users});

export default reducer;

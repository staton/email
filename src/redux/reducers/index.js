import { combineReducers } from 'redux';
import emailReducer from '../reducers/email-reducers';

const allReducers = combineReducers({
    email: emailReducer
});

export default allReducers;
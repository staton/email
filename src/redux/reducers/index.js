import appReducer from '../reducers/app-reducers';
import emailReducer from '../reducers/email-reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    app: appReducer,
    email: emailReducer
});

export default allReducers;
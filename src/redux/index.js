import appReducer from './reducers/app-reducers';
import emailReducer from './reducers/email-reducers';
import searchReducer from './reducers/search-reducers';
import userReducer from './reducers/user-reducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    app: appReducer,
    email: emailReducer,
    search: searchReducer,
    user: userReducer
});

export default allReducers;
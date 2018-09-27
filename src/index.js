import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './redux/index';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

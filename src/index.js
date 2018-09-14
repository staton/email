import './styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './redux/reducers/index';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { IconContext } from 'react-icons';

var store = createStore(allReducers);
//<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

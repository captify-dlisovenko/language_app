import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./store";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
             <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);





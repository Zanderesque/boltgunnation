import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/open-sans';
import './style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App id="my app" />
        </Provider>
    </React.StrictMode>
);

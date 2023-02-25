import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/open-sans';
import './style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App id="my app" />
    </React.StrictMode>
);

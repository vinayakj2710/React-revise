import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

import App from './App';

// ReactDom.render(<Counter/>, document.getElementById('root'));

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />)
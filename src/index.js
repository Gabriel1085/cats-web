import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container)
root.render(<App/>)

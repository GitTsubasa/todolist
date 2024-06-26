import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// connection between real and virtual DOM
const root = createRoot(document.getElementById('root'));
root.render(<App />);
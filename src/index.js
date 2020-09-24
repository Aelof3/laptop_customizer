import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaults from './modules/Defaults';

const { FEATURES } = defaults;
ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));

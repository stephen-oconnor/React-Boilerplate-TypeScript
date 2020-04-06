import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './App';
import './styles.css';
import DefaultErrorBoundary from './DefaultErrorBoundary';

if (process.env.NODE_ENV !== 'production') {
	var axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

ReactDOM.render(
	<React.StrictMode>
		<DefaultErrorBoundary>
			<App compiler={'TypeScript'} framework={'React'} />
		</DefaultErrorBoundary>
	</React.StrictMode>,
	document.getElementById('app')
);

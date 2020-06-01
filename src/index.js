import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import MultiPly from './components/MultiPly';
import WordRelay from './components/WordRelay';
import ResponseCheck from './components/ResponseCheck';

ReactDOM.render(<div><MultiPly /><WordRelay /><ResponseCheck/></div>, document.querySelector('#root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

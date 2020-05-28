const React = require('react');
const ReactDOM = require('react-dom');

const MultiPly = require('./multiply');
const WordRelay = require('./WordRelay');

ReactDOM.render(<div><MultiPly /><WordRelay /></div>, document.querySelector('#root'));

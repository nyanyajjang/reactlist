const React = require('react');
const ReactDOM = require('react-dom');

const MultiPly = require('./MultiPly');
const WordRelay = require('./WordRelay');

ReactDOM.render(<div><MultiPly /><WordRelay /></div>, document.querySelector('#root'));

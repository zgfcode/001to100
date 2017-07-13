import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './App.js';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
*/
/*App2覆盖App*/
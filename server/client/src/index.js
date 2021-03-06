import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './form';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(<Router>
    <div>
      <Route exact path="/" component={Form} />
      <Route path="/resume" component={App} /> 
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();

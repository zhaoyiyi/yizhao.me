import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Projects from './Projects';
import Resume from './Resume';

render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/projects(/:name)" component={Projects}/>
        <Route path="/resume" component={Resume}/>
      </Route>
    </Router>,
    document.querySelector('#app')
);
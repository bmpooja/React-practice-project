import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu';
import Favorite from './components/Favorite';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/Menu" component={Menu} />
        </Switch>
        </Router>
        <Favorite/>
  </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

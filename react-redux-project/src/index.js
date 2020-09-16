import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import RenderPropComp from './components/RenderPropComp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import RPFavorite from './components/RPFavorite';
import RenderPMenu from './components/RenderPMenu';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/Menu" component={Menu} />
        </Switch>
        </Router>
        <Favorite/>
        <RenderPropComp test = {
          function (name,isDayTime, number) {
            return (<div>
              <h1> Hey {name}</h1>
              <p>{isDayTime ? "Good Day" : "Good Evening"}</p>
              <p>{number > 0 ? "number is greater than zero" : "number is less than zero"}</p>
              </div>
            )
            }
        } />
        <RPFavorite />
        <RenderPMenu/>
  </React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

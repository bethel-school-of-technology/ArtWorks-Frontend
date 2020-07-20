import React from 'react';
import Store from './Store';
import ReactDOM from 'react-dom';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

import { Home } from './Home';
import Gallery from './components/Gallery';
import Signup from './components/Signup';
import history from "./utils/history";


function App () {
    return (
        <React.Fragment>
            <Router history={history}>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/submit" component={Signup} />
                  <Route path="/store" component={Store} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

fetch('/users')
    .then(response => response.text())
    .then(data => console.log({ data }));

export default App;

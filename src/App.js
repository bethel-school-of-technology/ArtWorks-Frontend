import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavBar/NavigationBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import AWFooter from './components/AWFooter';
import {Home} from './Home';
import Gallery from './components/Gallery';
import Signup from './components/Signup';
import Store from './Store';
import history from "./utils/history";


class App extends Component {
    state={
        sideDrawerOpen: false
    };

    drawerToggleClickHandler=() => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler=() => {
        this.setState({ sideDrawerOpen: false });
    };

    render () {
        // let sideDrawer;
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop=<Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ marginTop: '50px', marginBottom: '57px' }}>
                <React.Fragment>
                    <Router history={history}>

                        <main className="top" style={{ marginTop: '64px' }}>
                            <Switch >
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route path="/gallery" component={Gallery} />
                                <Route path="/submit" component={Signup} />
                                <Route path="/store" component={Store} />
                            </Switch>
                        </main>
                    </Router>
                    <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <AWFooter />
                </React.Fragment>
            </div>
        );
    }
}

fetch('/users')
    .then(response => response.text())
    .then(data => console.log({ data }));


export default App;

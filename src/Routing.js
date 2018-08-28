
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Home from './components/Home'

const Routing = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
)

export default Routing
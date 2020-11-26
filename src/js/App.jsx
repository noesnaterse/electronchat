import React from 'react';

import HomeView from './views/Home';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/settings"><h1>I am the settings view</h1></Route>
                <Route path="/login"><h1>I am the login view</h1></Route>
                <Route path="/register"><h1>I am the register view</h1></Route>
                <Route path="/"><HomeView /></Route>
            </Switch>
        </Router>
    )
}

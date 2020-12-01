import React from 'react';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import RegisterView from './views/Register';
import LoginView from './views/Login';
import SettingsView from './views/Settings';

import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="content-wrapper">
                <Switch>
                    <Route path="/chat"><ChatView /></Route>
                    <Route path="/settings"><SettingsView /></Route>
                    <Route path="/login"><LoginView /></Route>
                    <Route path="/register"><RegisterView /></Route>
                    <Route path="/"><HomeView /></Route>
                </Switch>
            </div>
        </Router>
    )
}

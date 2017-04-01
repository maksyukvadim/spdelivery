'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'
import { AppContainer } from 'react-hot-loader';


class Greeting extends React.Component {

    componentWillUnmount() {
        console.log('Greeting Unmount2s')
    }

    render() {
        return <h1>Hello1, {this.props.name}</h1>;
    }
}

class Home extends React.Component {
    render() {
        return <h1>Home, {this.props.name}</h1>;
    }
}

class MainLayout extends React.Component {
    render() {
        return (
            <div className="app">
                <header className="primary-header"/>
                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/widgets">Widgets</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

class SearchLayout extends React.Component {
    render() {
        return (
            <div className="search">
                <header className="search-header"/>
                <div className="results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination"></div>
            </div>
        );
    }
}

class UserList extends React.Component {
    render() {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
}


function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Router history={hashHistory}>
                <Route component={MainLayout}>
                    <Route path="/" component={Home}/>

                    <Route component={SearchLayout}>
                        <Route path="users" component={UserList}/>
                        <Route path="widgets" component={Greeting}/>
                    </Route>
                </Route>
            </Router>
        </AppContainer>, document.getElementById('app'));
}

renderApp();

if (module.hot) {
    module.hot.accept('./app', () => {
        renderApp();
    });
}

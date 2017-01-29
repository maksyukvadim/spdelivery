'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function renderApp() {
    ReactDOM.render(<Greeting name="Alexeevka luxury" />, document.getElementById('app'));
}

renderApp();

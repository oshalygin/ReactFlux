"use strict";

var React = require("react");

var About = React.createClass({
    statics: {
        willTransitionTo: function (transition, props, query, callback) {
            if (!confirm("Are you sure you want to navigate to this view?")) {
                transition.abort();
            }
            callback();
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm("Are you sure you want to LEAVE?")) {
                transition.abort();
            }
            else {
                callback();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About Page</h1>
                <p>
                    This application will use the following:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
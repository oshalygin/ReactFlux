"use strict";

var React = require("react");

var Home = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Administration</h1>
                    <p>React, React Router, and flux for ultra responsive web applciations </p>
                </div>
            </div>
        );
    }
});

module.exports = Home;
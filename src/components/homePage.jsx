"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Home = React.createClass({
    render: function () {
        return (

            <div className="jumbotron">
                <h1>Administration</h1>
                <p>React, React Router, and flux for ultra responsive web applications </p>
                <p><Link to="about" className="btn btn-lg btn-primary">Learn More</Link></p>
            </div>

        );
    }
});

module.exports = Home;
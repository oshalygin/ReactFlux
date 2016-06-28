"use strict";

var React = require("react");
var Link = require("react-router").Link;

var NotFoundPage = React.createClass({

    render: function () {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops, there is nothing to see here...</p>
                <p>Safely navigate back to the home page, <Link to="application">Click Here</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;
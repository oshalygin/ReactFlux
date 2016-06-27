/*eslint-disable strict */

$ = jQuery = require("jQuery");

var React = require("react");
var Header = require("./common/header.jsx");
var RouteHandler = require('react-router').RouteHandler;

var Application = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Application;
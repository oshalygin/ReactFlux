"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="application" className="navbar-brand">
                        ReactFlux
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="application">Home</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
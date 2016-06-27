"use strict";

var React = require("react");

var Contacts = React.createClass({
    render: function () {

        function getEmailAddress() {
            return "oshalygin@gmail.com";
        }

        return (
            <div className="container">
                <h3>Contact me at {getEmailAddress() }</h3>
            </div>
        );
    }
});

module.exports = Contacts;
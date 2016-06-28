"use strict";
var React = require("react");
var AuthorForm = require("./authorForm.jsx");

var ManageAuthorPage = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Manage Author</h3>
                <AuthorForm />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
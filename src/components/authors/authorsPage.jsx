"use strict";

var React = require("react");
var Link = require("react-router").Link;

// var AuthorApi = require("../../api/authorApi");
var AuthorStore = require("../../stores/authorStore");
var AuthorActions = require("../../actions/authorActions");

var AuthorList = require("./authorList.jsx");

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },

    render: function () {

        return (
            <div>
                <h4>Authors</h4>
                <Link to="addAuthors" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;
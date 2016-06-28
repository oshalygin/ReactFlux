"use strict";

var React = require("react");
var Link = require("react-router").Link;

var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList.jsx");

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
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
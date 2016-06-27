"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList.jsx");

var Authors = React.createClass({
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
                <h2>Authors</h2>
                // <AuthorList />
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;
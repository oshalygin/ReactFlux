"use strict";

var React = require("react");
var Link = require("react-router").Link;
var AuthorActions = require("../../actions/authorActions");
var toastr = require("toastr");

var AuthorList = React.createClass({

    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function (id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.warning("Deleted: " + id);
    },

    render: function () {
        function createAuthorRow(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" className="btn btn-xs btn-danger" onClick={this.deleteAuthor.bind(this, author.id)}>Remove Author</a></td>
                    <td><Link to="manageAuthor" params={{id:author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }

        return (
            <table className="table">
                <thead>
                    <th></th>
                    <th>Id</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this) }
                </tbody>
            </table>
        );
    }
});

module.exports = AuthorList;
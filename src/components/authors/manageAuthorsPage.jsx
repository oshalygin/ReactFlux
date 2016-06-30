"use strict";
var React = require("react");
var Router = require("react-router");

var AuthorForm = require("./authorForm.jsx");

var AuthorStore = require("../../stores/authorStore");
var AuthorAction = require("../../actions/authorActions");

var toastr = require("toastr");

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm("Leave without saving?")) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            author: {
                id: "",
                firstName: "",
                lastName: ""
            },
            errors: {},
            dirty: false
        };
    },

    setAuthorState: function (event) {
        this.setState({ dirty: true });
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "The first name needs to be at least 3 characters long";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "The last name needs to be at least 3 characters long";
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;

    },

    componentWillMount: function () {
        var authorId = this.props.params.id

        if (!!authorId) {
            var author = AuthorStore.getAuthorById(authorId);
            this.setState({ author: author });
        }
    },

    saveAuthor: function (event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorAction.createAuthor(this.state.author);
        var savedMessage = "Saved: " + this.state.author.firstName + " " + this.state.author.lastName;
        toastr.success(savedMessage);
        this.setState({ dirty: false });
        this.transitionTo("authors");
    },

    render: function () {
        return (
            <div>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
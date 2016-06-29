"use strict";
var React = require("react");
var Router = require("react-router");

var AuthorForm = require("./authorForm.jsx");
var AuthorApi = require("../../api/authorApi.js");
var toastr = require("toastr");

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function () {
        return {
            author: {
                id: "",
                firstName: "",
                lastName: ""
            },
            errors: {}
        };
    },

    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            this.state.errors = "The first name needs to be at least 3 characters long";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors = "The last name needs to be at least 3 characters long";
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;

    },

    saveAuthor: function (event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        var savedMessage = "Saved: " + this.state.author.firstName + " " + this.state.author.lastName
        toastr.success(savedMessage);
        this.transitionTo("authors");
    },

    render: function () {
        return (
            <div>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState} onSave={this.saveAuthor} />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
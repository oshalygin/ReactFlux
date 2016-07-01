"use strict";

var Dispatcher = require("../dispatcher/application.dispatcher");
var AuthorApi = require("../api/authorApi");
var ActionTypes = require("../constants/actionTypes");

var AuthorActions = {

    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function (author) {
        var authorToUpdate = AuthorApi.getAuthorById(author.id);
        authorToUpdate.firstName = author.firstName;
        authorToUpdate.lastName = author.lastName;

        var savedAuthor = AuthorApi.saveAuthor(authorToUpdate);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: savedAuthor
        });
    }

};

module.exports = AuthorActions;
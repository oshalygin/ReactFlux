"use strict"

var assign = require("object-assign");

var Dispatcher = require("../dispatcher/application.dispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var CHANGE_EVENT = "change";

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    }
});

module.exports = AuthorStore;

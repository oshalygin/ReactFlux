"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var Application = require("./components/application.jsx");

var routes = (
  <Route name="application" path="/" handler={require('./components/application.jsx')}>
    <DefaultRoute handler={require('./components/homePage.jsx')} />
    <Route name="authors" handler={require('./components/authors/authorsPage.jsx') } />
    <Route name="contacts" handler={require('./components/contacts/contactsPage.jsx')} />
    <Route name="about" handler={require('./components/about/aboutPage.jsx') } />
    <NotFoundRoute handler={require('./components/notFoundPage.jsx')} />
  </Route>
);

module.exports = routes;
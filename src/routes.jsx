"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Application = require("./components/application.jsx");

var routes = (
  <Route name="application" path="/" handler={require('./components/application.jsx')}>
    <DefaultRoute handler={require('./components/homePage.jsx')} />
    <Route name="authors" handler={require('./components/authors/authorsPage.jsx') } />
    <Route name="addAuthors" path="author" handler={require('./components/authors/manageAuthorsPage.jsx') } />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorsPage.jsx') } />
    <Route name="contacts" handler={require('./components/contacts/contactsPage.jsx')} />
    <Route name="about" handler={require('./components/about/aboutPage.jsx') } />
    <NotFoundRoute handler={require('./components/notFoundPage.jsx') } />
    <Redirect from="awthurs" to="authors" />
    <Redirect from="about-us" to="about" />
    <Redirect from="contacts/*" to="contacts" />
  </Route>
);

module.exports = routes;
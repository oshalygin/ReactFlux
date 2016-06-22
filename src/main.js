$ = jQuery = require('jquery');

var React = require("react");
var Home = require("./components/homePage");
var About = require("./components/about/aboutPage");
var Contacts = require("./components/contacts/contactsPage");
var Header = require("./components/common/header");

(function (win) {
    "use strict";

    var Application = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case "about":
                    Child = About;
                    break;
                case "contacts":
                    Child = Contacts;
                    break;
                default:
                    Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        console.log(win.location.hash);
        var route = win.location.hash.substr(1);
        React.render(<Application route={route} />, document.getElementById("app"));
    }

    win.addEventListener("hashchange", render);
    render();

})(window);
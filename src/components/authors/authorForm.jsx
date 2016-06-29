"use strict";
var React = require("react");
var TextInput = require("../common/textInput.jsx");

var AuthorForm = React.createClass({
	propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <div>
                <h3>Manage Author</h3>
                <form className="col-md-offset-4 col-md-4 ">
                    <TextInput
                        name = "firstName"
                        label = "First Name"
                        value={this.props.author.firstName}
                        error={this.props.errors.firstName}
                        onChange={this.props.onChange} />
                    <br/>
                    <TextInput
                        name = "lastName"
                        label = "Last Name"
                        value={this.props.author.lastName}
                        error={this.props.errors.lastName}
                        onChange={this.props.onChange} />
                    <br/>

                    <input type="submit" onClick={this.props.onSave} value="Save" className="btn btn-primary" />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;
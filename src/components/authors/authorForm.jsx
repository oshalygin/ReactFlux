"use strict";
var React = require("react");
var TextInput = require("../common/textInput.jsx");

var AuthorForm = React.createClass({

    render: function () {
        return (
            <div>
                <h3>Manage Author</h3>
                <form className="col-md-offset-4 col-md-4 ">
                    <TextInput
                        name = "firstName"
                        label = "First Name"
                        value={this.props.author.firstName}
                        errors={this.props.errors.firstName}
                        onChange={this.props.onChange} />
                    <br/>
                    <TextInput
                        name = "lastName"
                        label = "Last Name"
                        value={this.props.author.lastName}
                        errors={this.props.errors.lastName}
                        onChange={this.props.onChange} />
                    <br/>

                    <input type="submit" onClick={this.props.onSave} value="Save" className="btn btn-primary" />
                </form>
            </div>
        );
    }
});

module.exports = AuthorForm;
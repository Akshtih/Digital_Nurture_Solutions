import React, { Component } from "react";

class Register extends Component {

    constructor() {

        super();

        this.state = {

            name: "",

            email: "",

            password: "",

            errors: {}

        };

    }

    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({

            [name]: value

        });

    };

    validate = () => {

        let errors = {};

        let isValid = true;

        if (this.state.name.length < 5) {

            errors.name =
                "Name should have at least 5 characters";

            isValid = false;

        }

        if (

            !this.state.email.includes("@") ||

            !this.state.email.includes(".")

        ) {

            errors.email =
                "Enter a valid Email";

            isValid = false;

        }

        if (this.state.password.length < 8) {

            errors.password =
                "Password should contain minimum 8 characters";

            isValid = false;

        }

        this.setState({

            errors

        });

        return isValid;

    };

    handleSubmit = (event) => {

        event.preventDefault();

        if (this.validate()) {

            alert("Registration Successful");

            this.setState({

                name: "",

                email: "",

                password: "",

                errors: {}

            });

        }

    };

    render() {

        return (

            <div className="container">

                <h2>Mail Registration</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Name</label>

                    <input

                        type="text"

                        name="name"

                        value={this.state.name}

                        onChange={this.handleChange}

                    />

                    <span className="error">

                        {this.state.errors.name}

                    </span>

                    <br /><br />

                    <label>Email</label>

                    <input

                        type="text"

                        name="email"

                        value={this.state.email}

                        onChange={this.handleChange}

                    />

                    <span className="error">

                        {this.state.errors.email}

                    </span>

                    <br /><br />

                    <label>Password</label>

                    <input

                        type="password"

                        name="password"

                        value={this.state.password}

                        onChange={this.handleChange}

                    />

                    <span className="error">

                        {this.state.errors.password}

                    </span>

                    <br /><br />

                    <button type="submit">

                        Register

                    </button>

                </form>

            </div>

        );

    }

}

export default Register;
import React, { Component } from "react";

class CurrencyConverter extends Component {

    constructor() {

        super();

        this.state = {

            amount: "",

            currency: ""

        };

    }

    handleAmount = (event) => {

        this.setState({

            amount: event.target.value

        });

    }

    handleCurrency = (event) => {

        this.setState({

            currency: event.target.value

        });

    }

    handleSubmit = (event) => {

        event.preventDefault();

        const euro = this.state.amount / 90;

        alert(

            "Converting to Euro Amount is " +

            euro.toFixed(2)

        );

    }

    render() {

        return (

            <div>

                <h1
                    style={{ color: "green" }}
                >
                    Currency Converter!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <label>

                        Amount:

                    </label>

                    <input

                        type="number"

                        value={this.state.amount}

                        onChange={this.handleAmount}

                    />

                    <br /><br />

                    <label>

                        Currency:

                    </label>

                    <input

                        type="text"

                        value={this.state.currency}

                        onChange={this.handleCurrency}

                    />

                    <br /><br />

                    <button>

                        Submit

                    </button>

                </form>

            </div>

        );

    }

}

export default CurrencyConverter;
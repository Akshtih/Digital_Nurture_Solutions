import "./App.css";
import officeImage from "./office.jpg";

function App() {

    const heading = "Office Space";

    const officeList = [

        {
            Name: "DBS",
            Rent: 50000,
            Address: "Chennai"
        },

        {
            Name: "Regus",
            Rent: 75000,
            Address: "Hyderabad"
        },

        {
            Name: "WeWork",
            Rent: 85000,
            Address: "Bangalore"
        }

    ];

    return (

        <div className="container">

            <h1>

                {heading}, at Affordable Range

            </h1>

            {
                officeList.map((office, index) => (

                    <div key={index}>

                        <img

                            src={officeImage}

                            alt="Office Space"

                        />

                        <h2>

                            Name: {office.Name}

                        </h2>

                        <h3

                            className={

                                office.Rent <= 60000

                                    ? "textRed"

                                    : "textGreen"

                            }

                        >

                            Rent: Rs. {office.Rent}

                        </h3>

                        <h3>

                            Address: {office.Address}

                        </h3>

                        <hr />

                    </div>

                ))
            }

        </div>

    );

}

export default App;
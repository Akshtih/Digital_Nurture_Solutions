function FlightDetails() {

    return (

        <div>

            <h2>Flight Details</h2>

            <table border="1" cellPadding="8">

                <thead>

                    <tr>

                        <th>Flight Name</th>

                        <th>From</th>

                        <th>To</th>

                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>IndiGo</td>

                        <td>Hyderabad</td>

                        <td>Delhi</td>

                        <td>₹5500</td>

                    </tr>

                    <tr>

                        <td>Air India</td>

                        <td>Hyderabad</td>

                        <td>Mumbai</td>

                        <td>₹4200</td>

                    </tr>

                    <tr>

                        <td>SpiceJet</td>

                        <td>Hyderabad</td>

                        <td>Bangalore</td>

                        <td>₹3500</td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default FlightDetails;
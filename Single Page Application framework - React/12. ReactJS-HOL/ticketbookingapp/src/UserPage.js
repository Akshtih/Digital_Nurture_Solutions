import FlightDetails from "./FlightDetails";

function UserPage() {

    const bookTicket = () => {

        alert("Ticket Booked Successfully!");

    };

    return (

        <div>

            <h1>Welcome User</h1>

            <FlightDetails />

            <br />

            <button onClick={bookTicket}>

                Book Ticket

            </button>

        </div>

    );

}

export default UserPage;
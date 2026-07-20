import { useState } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {

        setIsLoggedIn(true);

    };

    const handleLogout = () => {

        setIsLoggedIn(false);

    };

    return (

        <div style={{ margin: "40px" }}>

            <h1>Ticket Booking App</h1>

            {

                isLoggedIn ?

                    <UserPage />

                    :

                    <GuestPage />

            }

            <br />

            {

                isLoggedIn ?

                    <LogoutButton

                        onClick={handleLogout}

                    />

                    :

                    <LoginButton

                        onClick={handleLogin}

                    />

            }

        </div>

    );

}

export default App;
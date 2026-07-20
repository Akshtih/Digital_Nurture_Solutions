function ListofIndianPlayers(props) {

    return (

        <ul>

            {

                props.IndianPlayers.map(

                    (player, index) => (

                        <li key={index}>

                            Mr. {player}

                        </li>

                    )

                )

            }

        </ul>

    );

}

export default ListofIndianPlayers;
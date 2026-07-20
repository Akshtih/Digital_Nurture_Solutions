function ListofPlayers(props) {

    return (

        <ul>

            {
                props.players.map((player, index) => (

                    <li key={index}>

                        Mr. {player.name} &nbsp;

                        <span>{player.score}</span>

                    </li>

                ))
            }

        </ul>

    );

}

export default ListofPlayers;
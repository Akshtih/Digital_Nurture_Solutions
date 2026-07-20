function ScoreBelow70(props) {

    const filteredPlayers =
        props.players.filter(player => player.score <= 70);

    return (

        <ul>

            {
                filteredPlayers.map((player, index) => (

                    <li key={index}>

                        Mr. {player.name}

                        &nbsp;

                        {player.score}

                    </li>

                ))
            }

        </ul>

    );

}

export default ScoreBelow70;
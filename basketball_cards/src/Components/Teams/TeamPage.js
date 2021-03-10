import React, { useEffect, useState } from 'react';
import Players from './Players';
import axios from 'axios';

function TeamPage() {
    const [players, setPlayers] = useState([]);
    const [teamName, setTeamName] = useState(['Atlanta Hawks','Boston Celtics','Brooklyn Nets','Charlotte Hornets','Chicago Bulls','Cleveland Cavaliers','Dallas Mavericks','Denver Nuggets','Detroit Pistons','Golden State Warriors','Houston Rockets','Indiana Pacers','LA Clippers','Los Angeles Lakers','Memphis Grizzlies','Miami Heat','Milwaukee Bucks','Minnesota Timberwolves','New Orleans Pelicans','New York Knicks','Oklahoma City Thunder','Orlando Magic','Philadelphia 76ers','Phoenix Suns','Portland Trail Blazers','Sacramento Kings','San Antonio Spurs','Toronto Raptors','Utah Jazz','Washington Wizards']);

    const [value, setValue] = useState(teamName[0])

    const Add = teamName.map(Add => Add)
    const handleClick = (e) => {
        setValue(teamName[e.target.value])
        console.log(value)
    }

    const baseUrl = 'https://www.balldontlie.io/api/v1/players'

    useEffect(() => {
        axios.get(baseUrl + '?page=0&per_page=100')
        .then(res => {
            console.log(res.data.data)
            setPlayers(res.data.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h2>{value} Page</h2>
            <select
                onChange={e => handleClick(e)}
                className="Team_Select"
            >
                {
                    Add.map((team, key) => 
                        <option key={key} value={key}>
                            {team}
                        </option>
                    )
                }
            </select>

            {
                players.filter((playerInfo) => {
                    return playerInfo.team.full_name === value;
                }).map((playerInfo) => (
                    <Players key={playerInfo.id} playerInfo={playerInfo}/>
                ))
            }
        </div>
    )
}

export default TeamPage
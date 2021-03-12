import React, { useEffect, useState } from 'react';
import Players from './Players';
import axios from 'axios';

function TeamPage() {
    const teamName = [
        'Atlanta Hawks',
        'Boston Celtics',
        'Brooklyn Nets',
        'Charlotte Hornets',
        'Chicago Bulls',
        'Cleveland Cavaliers',
        'Dallas Mavericks',
        'Denver Nuggets',
        'Detroit Pistons',
        'Golden State Warriors',
        'Houston Rockets',
        'Indiana Pacers',
        'LA Clippers',
        'Los Angeles Lakers',
        'Memphis Grizzlies',
        'Miami Heat',
        'Milwaukee Bucks',
        'Minnesota Timberwolves',
        'New Orleans Pelicans',
        'New York Knicks',
        'Oklahoma City Thunder',
        'Orlando Magic',
        'Philadelphia 76ers',
        'Phoenix Suns',
        'Portland Trail Blazers',
        'Sacramento Kings',
        'San Antonio Spurs',
        'Toronto Raptors',
        'Utah Jazz',
        'Washington Wizards',
    ]

    const [players, setPlayers] = useState([]);
    const [value, setValue] = useState(teamName[0])

    const Add = teamName.map(Add => Add)
    const handleClick = (e) => {
        setValue(teamName[e.target.value])
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

    const logoUrl = () => {
        const arr = value.split(' ')
        const city = arr[0]
        const team = arr[1]
        return `http://loodibee.com/wp-content/uploads/nba-${city}-${team}-logo.png`.toLowerCase()
    }


    return (
        <div style={{backgroundImage: `url(${logoUrl()})`, backgroundRepeat:'no-repeat'}}>
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
                    <div>
                        <Players key={playerInfo.id} playerInfo={playerInfo}/>
                    </div>
                ))
            }
        </div>
    )
}

export default TeamPage
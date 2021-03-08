import React, { useEffect, useState } from 'react';
import Players from './Players';
import axios from 'axios';

function TeamPage() {
    const [players, setPlayers] = useState([]);
    const [teamName, setTeamName] = useState('');

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
            <h2>TeamPage</h2>
            <h3>Players Page</h3>
            {
                players.filter((playerInfo) => {
                    return playerInfo.team.full_name === 'Indiana Pacers';
                }).map((playerInfo) => (
                    <Players key={playerInfo.id} playerInfo={playerInfo}/>
                ))
            }
        </div>
    )
}

export default TeamPage
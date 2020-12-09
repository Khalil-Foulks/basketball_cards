import React, { useEffect, useContext } from 'react';
import Players from './Players';
import axios from 'axios';
import { ContextPlayerData } from '../Store'

function TeamPage() {
    // const [playerData, setPlayerData] = useContext()
    const baseUrl = 'https://www.balldontlie.io/api/v1/players'

    useEffect(() => {
        axios.get(baseUrl + '?page=0&per_page=100')
        .then(res => {
            console.log(res.data)
            // setPlayerData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h2>TeamPage</h2>
            <Players/>
        </div>
    )
}

export default TeamPage
import React from 'react'

function Players(props) {
    const { playerInfo } = props;

    return (
        <div>
            <div>
                <img 
                    src='https://cdn.nba.com/headshots/nba/latest/1040x760/203954.png' 
                    alt='player'
                />
                <p>{playerInfo.first_name} {playerInfo.last_name}</p>
                <p>Team Name: {playerInfo.team.full_name}</p>
                <p>Position: {playerInfo.position ? playerInfo.position : 'N/A'}</p>
            </div>
        </div>
    )
}

export default Players
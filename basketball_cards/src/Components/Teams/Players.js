import React from 'react'

function Players(props) {
    const { playerInfo } = props;

    return (
        <div>
            <div>
                <p>Name: {playerInfo.first_name} {playerInfo.last_name}</p>
                <p>Team: {playerInfo.team.full_name}</p>
            </div>
        </div>
    )
}

export default Players
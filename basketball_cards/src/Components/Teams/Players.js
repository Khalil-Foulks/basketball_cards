import React from 'react'

function Players(props) {
    const { playerInfo } = props;

    return (
        <div>
            <h2>Players Page</h2>
            <div>{playerInfo.first_name} {playerInfo.last_name}</div>
            <div>{playerInfo.team.full_name}</div>
        </div>
    )
}

export default Players
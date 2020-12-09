import React, { useEffect, useState } from 'react';

// const initialState = {
//     key: value
// }

export const ContextPlayerData = React.createContext();

const Store = ({ children }) => {
    const [playerData, setPlayerData] = useState([])

    return (
        <ContextPlayerData.Provider value={[playerData, setPlayerData]}>
            {children}
        </ContextPlayerData.Provider>
    )
}


export default Store;

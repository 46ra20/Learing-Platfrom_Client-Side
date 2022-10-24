import React, { createContext } from 'react';

export const ContextProvider = createContext();

const UserContext = ({children}) => {
    return (
        <ContextProvider.Provider value={{}}>
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;
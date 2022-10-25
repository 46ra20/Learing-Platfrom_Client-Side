import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export const ContextProvider = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    const createIdWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }


    return (
        <ContextProvider.Provider value={{createIdWithEmailAndPassword}}>
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;
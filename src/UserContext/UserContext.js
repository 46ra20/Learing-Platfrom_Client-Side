import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth';

export const ContextProvider = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createIdWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logInWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGitHub = () =>{
        return signInWithPopup(auth, gitHubProvider);
    } 

    return (
        <ContextProvider.Provider 
        value={{
            createIdWithEmailAndPassword,
            logInWithEmailAndPassword,
            logInWithGoogle,
            logInWithGitHub,
        }}>
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;
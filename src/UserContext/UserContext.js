import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth';

export const ContextProvider = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    // authentication providers 
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [userData, setUserData] = useState();
    const [theme, setTheme] = useState(true);

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

    const logOut = () =>{
        return signOut(auth);
    }

    //update user data
    const updateUserData = (userName, photoUrl) =>{
        return updateProfile(auth.currentUser, {displayName:userName, photoURL:photoUrl});
    } 

    useEffect(()=>{
        const unsubscribe = () => onAuthStateChanged(auth, currentUser=>{
            setUserData(currentUser)
        })
        return unsubscribe();
    },[])

    return (
        <ContextProvider.Provider 
        value={{
            createIdWithEmailAndPassword,
            logInWithEmailAndPassword,
            logInWithGoogle,
            logInWithGitHub,
            logOut,
            updateUserData,
            setTheme,
            userData,
            theme
        }}>
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;
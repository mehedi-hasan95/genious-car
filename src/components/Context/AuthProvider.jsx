import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login With Email 
    const loginUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update user Name
    const updateName = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    // Logout User

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // After user Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe;
        }
    }, [])


    const authInfo = {
        user, createUser, loginUserWithEmail, logOut, updateName, loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right" />
        </AuthContext.Provider>
    );
};

export default AuthProvider;
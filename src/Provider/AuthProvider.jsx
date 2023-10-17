import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from '../firebase/firebase.config'
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

     useEffect(() =>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })

        return () => unSubscribe();
     },[])
     console.log(user)
    const googleProvider = new GoogleAuthProvider();
    

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginEmail = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {user, createUser, loginEmail, loginGoogle,logOut };
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;
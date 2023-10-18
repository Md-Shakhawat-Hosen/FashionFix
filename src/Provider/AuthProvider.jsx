import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from '../firebase/firebase.config'
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [dark, setDark] = useState(true);

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

     useEffect(() =>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser);
        })

        return () => unSubscribe();
     },[])
    //  console.log(user)
    const googleProvider = new GoogleAuthProvider();
    

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const userUpdateProfile = (name,photo) =>{
       
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
    }

    const authInfo = {
      user,
      createUser,
      loginEmail,
      loginGoogle,
      logOut,
      userUpdateProfile,
      loading,
      dark,
      setDark,
    };
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
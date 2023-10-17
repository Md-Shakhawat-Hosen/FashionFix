import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from '../firebase/firebase.config'
import PropTypes from "prop-types";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
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

    const authInfo = { createUser, loginEmail, loginGoogle };
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
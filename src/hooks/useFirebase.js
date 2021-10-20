import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading]= useState(true);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider);

    }

    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        isLogIn ? processLogin(email, password) : createNewUser(email, password);
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const createNewUser = (email, Password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then( () => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        handlePasswordChange,
        handleEmailChange,
        handleRegistration,
        isLoading,
        toggleLogin,
        isLogIn,
        setIsLoading,
        signInUsingGoogle,
        logOut

    }
}



export default useFirebase;
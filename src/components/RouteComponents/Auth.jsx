import firebaseApp from "../modules/base.js"
import React,{useEffect,useState} from "react"

export const AuthContext = React.createContext();

export const AuthProvider = ({childern})=>{
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() =>{
        firebaseApp.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    return(
   <AuthContext.Provider value={{currentUser}}>
    {childern}
   </AuthContext.Provider>
    );
}


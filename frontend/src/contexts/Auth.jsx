

import { createContext, useState } from "react";
export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    
    const handleAuth=(value)=>{
        setUser(value)
    }

   
    return(
        <AuthContext.Provider value={{user,handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

import { createContext, useEffect, useState } from "react";
import { AppConstants } from "../util/constants.js"; 
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();


export const AppContextProvider = (props) =>{

    axios.defaults.withCredentials = true;


    const backendURL = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null);

    
    const getUserData = async () =>{
        try{
            const response = await axios.get(backendURL+"/profile");
           if(response.status ===200){
            setUserData(response.data);
           }
           else{
            toast.error("Unable to retrieve profile");
           }
        }
        catch(error){
            toast.error(error.message);
        }
    }

    const getAuthState = async () =>{
        try{
             const response = await axios.get(backendURL + "/is-authenticated", { withCredentials: true });
            if(response.status === 200 && response.data === true){
                setIsLoggedIn(true);
               await getUserData();
            }
            else{
                setIsLoggedIn(false);
            }
        }
        catch (error) {
    if (error.response && error.response.status === 401) {
      // User is not logged in — don't treat it like a fatal error
      setIsLoggedIn(false);
    } else {
      // Log other errors (like server down)
      console.error("Auth check failed:", error);
    }
  } 
        };

    useEffect(() =>{
        getAuthState();
    }, []);

    const contextValue={     
        backendURL,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData

     }
    return(
        <AppContext.Provider value={contextValue}>
          {props.children}
        </AppContext.Provider>
    )
}
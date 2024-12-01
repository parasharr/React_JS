import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{ // children is a generic name which is use to pass the retrived data forward. As such it is not that important to use the name as children but this name is being used in states so we can use it here. 
    const [user, setUser] = React.useState(null) 
    return(
        //value is a kind of prop use to store the retrieved data from the children. 
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
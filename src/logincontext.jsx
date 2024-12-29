import { React,useState } from "react";
import  Logincontext  from "./loginconte";

let LoginContextProvider=({children})=>{
    let[username,setusername]=useState("");
    let [jwtToken,setToke]=useState("");
    let url="https://prodoto-spring-update-production.up.railway.app";

    return <Logincontext.Provider value={{username,jwtToken,setusername,setToke,url}}>
        {children}
    </Logincontext.Provider>

}

// let LoginContextProvider=({Children})=>{
// let [username,setusername]=useState("");
//     let [jwtToken,setJwtToken]=useState("");

//     return <Logincontext.Provider value={{username,setusername,jwtToken,setJwtToken}}>
//         {Children}
//     </Logincontext.Provider>
// }
export default LoginContextProvider;

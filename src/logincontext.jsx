import { React,useState } from "react";
import  Logincontext  from "./loginconte";

let LoginContextProvider=({children})=>{
    let[username,setusername]=useState("");
    let [jwtToken,setToke]=useState("");
    return <Logincontext.Provider value={{username,jwtToken,setusername,setToke}}>
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

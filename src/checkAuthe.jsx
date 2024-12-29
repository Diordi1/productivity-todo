import { useContext } from "react"
import Logincontext from "./loginconte"
import { Navigate, useNavigate } from "react-router-dom";

let CheckAuth=({children})=>{
    let {username}=useContext(Logincontext);
    let navigate=useNavigate();
    let url="https://prodoto-spring-update-production.up.railway.app"
    if(username!=""){
        return children;

    }else{

       return  navigate("/")
    }


}
export default CheckAuth;

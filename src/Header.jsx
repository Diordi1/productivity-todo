import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import Logincontext from "./loginconte";
let Header=()=>{
    let {username,setusername}=useContext(Logincontext);
    let navigate=useNavigate()

    return <div style={{height:"10vh"}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="d-flex w-100 container">
    <a className="navbar-brand" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg> Todo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {username!=""&&<>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/test" className="dropdown-item" >Action</Link></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </>
}
        
      </ul>
      <form className="d-flex" role="search">
       {username!=""?<button className="btn btn-outline-success" type="submit" onClick={
        (event)=>{
           setusername("") 
           navigate("/")
            event.preventDefault();

        }
       }>Logout</button>:<button className="btn btn-outline-success" type="submit" onClick={
        ()=>{
            navigate("/")
        }
       }>Login</button>}
        {/* <button className="btn btn-outline-success" type="submit">Log</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>
}
export default Header;

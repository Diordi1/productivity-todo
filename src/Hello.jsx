import React, { useContext } from 'react';
import Logincontext from './loginconte';
import { Navigate, useNavigate } from 'react-router-dom';
function Hello() {
    let {username}=useContext(Logincontext);
    let navigate=useNavigate();

    let handleClick=()=>{
        return <Navigate to="/todo"></Navigate>
    }
    return (  <>
    <div className="container">

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{username.split("@")[0]}</h1>
        <p class="col-md-8 fs-4">Welcome to Prodoto. Click on the below link to access your todos</p>
        <button class="btn btn-warning btn-lg" type="button" onClick={()=>{
          navigate("/todo")
        }}>See Todos</button>
      </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Profile</h2>
          <p>Click the below option to view or update your profile . Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aperiam?</p>
          <button class="btn btn-outline-light" type="button">Profile</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add Todos</h2>
          <p>Click here to add Todos Directly from here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil.</p>
          <button class="btn btn-outline-secondary" type="button" onClick={()=>{
            
          }}>Add Todo  </button>
        </div>
      </div>
    </div>
    </div>
    </>);
}

export default Hello;
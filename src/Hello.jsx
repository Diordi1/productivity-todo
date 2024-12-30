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
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-warning btn-lg" type="button" onClick={()=>{
          navigate("/todo")
        }}>See Todos</button>
      </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Profile</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Profile</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add Todos</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button" onClick={()=>{
            
          }}>Add Todo  </button>
        </div>
      </div>
    </div>
    </div>
    </>);
}

export default Hello;
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logincontext from './loginconte';

let Todos=()=>{
  let [todos1,settodos1]=useState([]);
  let [count,setCount]=useState(1);
  let[error,seterror]=useState(false);
  let {username,jwtToken,url}=useContext(Logincontext);
  
  let [errordetails,seterrordetails]=useState({
    stateError:false,
    message:""
  })
  let navigate=useNavigate();


  useEffect(()=>{
    console.log(jwtToken)
    axios.get(url+`/api/listtodo?username=${username}`,{
      headers:{
        'Authorization': 'Bearer '+jwtToken
      }
    })
      .then(res=>{
        settodos1(res.data)
        console.log(todos1);
        setCount(res.data[res.data.length-1].id)
        seterror({
          stateError:true,
          message:""
        });

      })
      .catch(err=>{console.log(err)

        if(err.response.status==500){
          console.log("server error")
          seterrordetails({
            stateError:true,
            message:"Internal Server Error"
          })
        }else{
          console.log("Wrong data")
          seterrordetails({
            stateError:true,
            message:"Wrong data"
          })
        }
      })
      .finally(()=>console.log("ended finalyy"))
  },[count])

    return<div className='container'>
      {errordetails.stateError===true?<p className='bg-warning text-center fs-2 border rounded'>{errordetails.message}</p>:<></>}
      
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">heading</th>
      <th scope="col">Description</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {
      todos1.map((val,idx)=>{
        


        return <tr key={idx}>
        <th scope="row">{idx+1}</th>
        <td>{val.username}</td>
        <td>{val.heading}</td>
        <td>  <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" value={val.description} id="floatingTextarea2" style={{height: "fit-content"}} disabled></textarea>
              <label for="floatingTextarea2">Description</label>
        </div>
        </td>
        <td><button className="btn btn-warning" onClick={()=>
          {
            axios.delete(url+`/api/deletetodo/${val.id}?username=${username}`,{},{
              headers:{
                "Authorization":"Bearer "+jwtToken
              }
            })
            .then(res=>{
              settodos1(res.data);
              count++;


            }).catch(err=>console.log(err+"here in the delete was found"))
            .finally(()=>{console.log("delete was completed")})
          }
        }>Delete</button></td>
        <td><button className="btn btn-success" onClick={
          ()=>{
            navigate(`/addtodo/${val.id}`)
          }
        }>Update</button></td>
      </tr>
      })
    }
   
    
  </tbody>
</table>

    <div className="row">
      <div className="btn1 col-6 text-end">

      <button className='btn btn-success' onClick={
        ()=>{
          navigate(`/addtodo`)
        }
      }>Add Todo</button>
      </div>
      <div className="btn2 col-6">

      <button className='btn btn-danger'><Link to="/" className='text-light'>Profile</Link></button>
      </div>
    </div>
    </div>
}
export default Todos;

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
      <div>
      <div class="row">

        {
          todos1.map((val,idx)=>{
            return <div class="col-sm-4 mb-3 mb-sm-0 bg-body-tertiary">
            <div class="card">
            <div class="card-body">
          <h5 class="card-title">{val.heading}</h5>
          <p class="card-text">{val.description}</p>
          <button className="btn btn-warning me-3" onClick={()=>
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
        }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
      </svg></button>
          <button className="btn btn-success" onClick={
          ()=>{
            navigate(`/addtodo/${val.id}`)
          }
        }><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"  version="1.1" id="Capa_1" width="20"  viewBox="0 0 420.827 420.827" xml:space="preserve">
        <g>
          <g>
            <path d="M210.29,0C156,0,104.43,20.693,65.077,58.269C25.859,95.715,2.794,146.022,0.134,199.921    c-0.135,2.734,0.857,5.404,2.744,7.388c1.889,1.983,4.507,3.105,7.244,3.105h45.211c5.275,0,9.644-4.098,9.979-9.362    c4.871-76.214,68.553-135.914,144.979-135.914c80.105,0,145.275,65.171,145.275,145.276c0,80.105-65.17,145.276-145.275,145.276    c-18.109,0-35.772-3.287-52.501-9.771l17.366-15.425c2.686-2.354,3.912-5.964,3.217-9.468c-0.696-3.506-3.209-6.371-6.592-7.521    l-113-32.552c-3.387-1.149-7.122-0.407-9.81,1.948c-2.686,2.354-3.913,5.963-3.218,9.467L69.71,403.157    c0.696,3.505,3.209,6.372,6.591,7.521c3.383,1.147,7.122,0.408,9.81-1.946l18.599-16.298    c31.946,18.574,68.456,28.394,105.581,28.394c116.021,0,210.414-94.392,210.414-210.414C420.705,94.391,326.312,0,210.29,0z"/>
            <path d="M195.112,237.9h118.5c2.757,0,5-2.242,5-5v-30c0-2.757-2.243-5-5-5h-83.5v-91c0-2.757-2.243-5-5-5h-30    c-2.757,0-5,2.243-5,5v126C190.112,235.658,192.355,237.9,195.112,237.9z"/>
          </g>
        </g>
        </svg></button>
      </div>
    </div>
  </div>
          })
        }


</div>
      </div>
        {/* <table className="table">
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
</table> */}

    <div className="row mt-4">
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

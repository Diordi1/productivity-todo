import { useContext, useState } from "react"
import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logincontext from "./loginconte";
import { toast,ToastContainer } from "react-toastify";
let Add=()=>{
    let navigate=useNavigate()
    let {username,url}=useContext(Logincontext)
    let [details,setDetails]=useState({
        heading:'',
        date:'',
        description:''
    })
    let handleChange=(event)=>{
        setDetails((prev)=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }
    return <>
    <div className="container">
    <ToastContainer />
        <p></p>
        <h1 className="text-align-center">AddTodo</h1>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Heading</span>
            <input type="text" name="heading" className="form-control" placeholder="Heading" value={details.heading} onChange={handleChange}aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Date</span>
            <input type="date" name="date" className="form-control" value={details.date} onChange={handleChange} placeholder="Username" aria-label="Date" aria-describedby="basic-addon1"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" name="description"id="exampleFormControlTextarea1" rows="6" value={details.description} onChange={handleChange}></textarea>
        </div>
        <div className="row">
    <div className="btn1 col-6 d-flex justify-content-end">

        <button className="btn btn-success " onClick={()=>{
            axios.post(url+`/api/addtodo`,{
               
                username:username,
                date:details.date,
                heading:details.heading,
                description:details.description

            }).then(res=>{
                console.log(res)
                toast.success("Added Succesfully")

                navigate("/todo")
            }).catch(err=>{console.log("catched error at the update stage"+err)
                toast.error("Not Added")
            })
            .finally(()=>console.log("happended"))
        }}>Add</button>
    </div>
    <div className="btn2 col-6 d-flex justify-content-start">

        <button className="btn btn-warning">Delete</button>
    </div>
        </div>
    </div>
</>
}
export default Add;
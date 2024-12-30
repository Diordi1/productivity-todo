import axios from "axios";
import { useContext, useState } from "react";
import Logincontext from "./loginconte";
import { Link, useNavigate } from "react-router-dom";

let Signup=()=>{

    let [details,setdetails]=useState({
        email:'',
        password:'',
        setpass:''
    })
    let [err,seterr]=useState({
        flag:false,
        message:""
    })
    let {jwtToken,url}=useContext(Logincontext);
    let navigate=useNavigate();
    let handleChange=(event)=>{
        setdetails(prev=>{
            return {...prev,[event.target.name]:event.target.value}
        })
    }
    let [check,setcheck]=useState(false);
   
    return <section className="vh-90 d-flex align-items-center justify-content-center bg-image"
    >
    <div className="mask d-flex align-items-center vh-50 gradient-custom-3">
      <div className="container vh-50">
        <div className="row d-flex justify-content-center align-items-center vh-10">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card b-r-15 shadow-sm" >
              <div className="card-body p-5">
                {err.flag?<p>{err.message}</p>:<></>}
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
  
                <form>
  
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={details.email.split("@")[0]}disabled  />
                    <label className="form-label" for="form3Example1cg">Your Name</label>
                  </div>
  
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" name="email" id="form3Example3cg" className="form-control form-control-lg" onChange={handleChange} value={details.email}/>
                    <label className="form-label" for="form3Example3cg">Your Email</label>
                  </div>
  
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" name="password" id="form3Example4cg" className="form-control form-control-lg" onChange={handleChange} value={details.password}/>
                    <label className="form-label" for="form3Example4cg">Password</label>
                  </div>
  
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" name="setpass" id="form3Example4cdg" className="form-control form-control-lg" onChange={handleChange} value={details.setpass} />
                    <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>
  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" id="form2Example3cg" value={check}onChange={(event)=>
                        {   
                            // check=event.target.checked;
                            setcheck(event.target.checked);

                        }
                    }/>
                    <label className="form-check-label" for="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
  
                  <div className="d-flex justify-content-center">
                    <button  type="button" data-mdb-button-init
                      data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      onClick={
                        ()=>{
                            if(details.password!=details.setpass||check==false){
                                seterr({
                                    flag:true,
                                    message:"Password not Matched"
                                })
                            }else{

                                axios.post(url+"/signup",{
                                  "email":details.email,
                                  "password":details.password
                                }).then(res=>{
                                    if(res.status==201){
                                        seterr({
                                            flag:false,
                                        })
                                        navigate("/")
                                    }
                                }).catch(err=>{
                                    seterr({
                                        flag:true,
                                        message:"Something went wrong"
                                    })
                                })
                            }
                        }
                      }
                      >Register</button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/"
                      className="fw-bold text-body"><u>Login here</u></Link></p>
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Signup;

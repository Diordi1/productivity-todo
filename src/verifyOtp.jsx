import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function OtpVerification(props) {
    let [otp,setotp]=useState("");

    let navigate=useNavigate();
    

    return (
   
    <div className='row d-flex align-items-center' >
          <ToastContainer />
<div className="modal modal-sheet position-fixed  p-4 py-md-5 row d-flex align-items-center" tabindex="-1" role="dialog" id="modalSheet" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
  <div className="modal-dialog col-12" role="document">
    <div className="modal-content rounded-4 shadow ">
      <div className="modal-header border-bottom-0">
        <h1 className="modal-title fs-5">verify email</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.settrigger(false)}></button>
      </div>
      <div className="modal-body py-0">
        <p>Please verify you account by the Otp {props.email}</p>
      </div>
      <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <div className="input-group">
            <input type="text" className="form-control" placeholder="OTP" aria-label="Username" aria-describedby="addon-wrapping" value={otp} onChange={(event)=>{
                setotp(event.target.value);

            }}/>
            </div>
       
        <button type="button" className="btn btn-lg btn-primary" data-bs-dismiss="modal" onClick={()=>{

            let c=new FormData();
             c.append("email",props.email);
            c.append("otp",otp);
            axios.post(props.url+"/verify",c).then(res=>{
                if(res.status==201){
                    console.log(res)
                    toast.success("OTP Verified")
                    
                    navigate("/");
                   

                }
            }).catch(err=>{
                toast.error("Wrong otp")
                console.log(err);
                
            })
        }
        }>Verify</button>
        </div>
    </div>
  </div>
</div>
    </div>);
}

export default OtpVerification;
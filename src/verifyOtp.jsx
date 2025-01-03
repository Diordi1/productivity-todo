import React from 'react';

function OtpVerification(props) {
    return (
    props.trigger?
    <div className='row d-flex align-items-center' >

<div className="modal modal-sheet position-fixed  p-4 py-md-5 row d-flex align-items-center" tabindex="-1" role="dialog" id="modalSheet" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
  <div className="modal-dialog col-12" role="document">
    <div className="modal-content rounded-4 shadow ">
      <div className="modal-header border-bottom-0">
        <h1 className="modal-title fs-5">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.settrigger(false)}></button>
      </div>
      <div className="modal-body py-0">
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <div className="input-group">
            <input type="text" className="form-control" placeholder="OTP" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
       
        <button type="button" className="btn btn-lg btn-primary" data-bs-dismiss="modal" onClick={()=> props.settrigger(false)}>Verify</button>
      </div>
    </div>
  </div>
</div>
    </div>:"");
}

export default OtpVerification;
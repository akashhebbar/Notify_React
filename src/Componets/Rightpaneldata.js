import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faPhone } from '@fortawesome/free-solid-svg-icons'
import Npi from './Npi'
import Npimember from './Npimember';
import pic from './avatar.jpg'
import Customerdetails from './Customerdetails';
const Rightpaneldata =()=>{
  let cstdteatils="Customer details"
  let npd="Network Partner Details"
  let tm="Time & Address"
  function showAlert() {
    alert("Calling to Customer");
  }
  
return(
    
<div className="conatiner  pt-4 ">

   
<div className="row justify-content-left pt-2">
    
<span className="ml-4 px-4">{cstdteatils}</span>
<span className="ml-5"><FontAwesomeIcon onClick={showAlert}  icon={faPhone} className="fa-1x" /><FontAwesomeIcon onClick={showAlert}  icon={faPhone} className="fa-1x" /></span>
</div>
<div className="row row pt-4 px-4">
<span classname="pt-2 ml-5 "> <img className = "rounded-circle" alt="img" height="30px" width="30px" src = { pic }/></span>
<span className=" pt-0 px-4 "><Customerdetails/> </span>
</div>
<div className="row pt-5 px-4">
<span classname="pt-4 ml-5 "> <FontAwesomeIcon  icon={faImage}  className="fa-2x" /> </span>
<span className=" pt-0 px-4 ">{tm}  </span>
</div>
<div className="row pt-5 ">
<span className=" pt-0 px-4 ">{npd}  </span>
</div>
<div className="row ">
<Npi/>
</div>
<div className="row pt-5 px-4">
  <Npimember/>
</div>


</div>
)
};

export default Rightpaneldata
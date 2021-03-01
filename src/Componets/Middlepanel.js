import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import DummyDate from './DummyDate'
import axios from 'axios';
import pic from './avatar.jpg'
const Middlepanel = (props) => {
  
  
 
  function showAlert() {
    alert("Calling to Ambassador");
  }
  const [id, setMsg]=useState("");
  const [name, setMsg1]=useState("");
  const [reason, setMsg3]=useState("");
  const [date_created, setMsg5]=useState("");
  axios.get(`http://127.0.0.1:5000/ambassador/${props.id}`)
  .then((response)=>{
      console.log(response)
      setMsg1(response.data.name )
      setMsg(response.data.aid)
      setMsg3(response.data.reason)
      setMsg5(response.data.date_created)



      
  }

  )
  return (
  
    

<div className="conatiner  pt-1  ">

   
    <div className="row justify-content-left pt-4">
    <span className="tab-space px-4">{id}  {reason}  </span>
    <span className="px-4"> {date_created}</span>
    </div>
    <div className="row row pt-4 px-4">
   <span classname="pt-4 ml-4"> <img className = "rounded-circle" alt="img" height="40px" width="40px" src = { pic }/> </span>
   <span className=" pt-0 px-4 ">{name}  </span>
   </div>
   <div className="row pt-4 px-4">
   <FontAwesomeIcon  icon={faUser} className="fa-2x "/> 
   <button type="button" onClick={showAlert} className="btn btn-primary ml-4">Call Ambassador</button>
   </div>
    <div className="row pt-4 px-2 ml-5">
    <span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPlayCircle} className="fa-2x" />   </span>
    <span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPauseCircle} className="fa-2x" />   </span>
    <span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPlayCircle} className="fa-2x" />   </span>
    </div>
    <div className="row ml-2">
    <DummyDate/>
    
    </div>
   
   

</div>
  )
};
export default Middlepanel;
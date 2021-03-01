import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faImage, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Dummy(props)
{

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
        return(
          
<div className="conatiner  pt-1  ">

   
<div className="row justify-content-left pt-4">
<span className="tab-space px-4">ID:{id}  Reson:{reason}  {date_created} <FontAwesomeIcon  icon={faUser} className="fa-2x" color="blue"/></span>
</div>
<div className="row row pt-4 px-4">
<span classname="pt-4 ml-4"> <FontAwesomeIcon  icon={faImage} className="fa-2x" /> </span>
<span className=" pt-0 px-4 ">{name}  </span>
</div>
<div className="row pt-4 px-4">
<FontAwesomeIcon  icon={faUser} className="fa-2x "/> 
<button type="button" className="btn btn-primary ml-4">Call Ambassador</button>
</div>
<div className="row pt-4 px-2 ml-5">
<span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPlayCircle} className="fa-2x" />   </span>
<span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPauseCircle} className="fa-2x" />   </span>
<span className=" pt-0 px-2"><FontAwesomeIcon  icon={faPlayCircle} className="fa-2x" />   </span>
</div>
<div className="row pt-4 px-2 ml-4">
<button type="button" className="btn btn-primary ml-4">Next Step</button>
</div>



</div>
)
};
  
  export default Dummy;
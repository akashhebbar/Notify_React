import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import pic from './avatar.jpg'
function Npimember() {
    const [data, setData]=useState([]);
    function showAlert() {
        alert("Calling to NPI");
      }
    const loadData=async()=>{
        await fetch("http://127.0.0.1:5000/npimember")
        .then(response=>response.json())
        .then(recevieM=>{
            setData(recevieM.res)
            console.log(recevieM)
        })
    }

    useEffect(()=>{
        loadData()
        //getData();

    },[])
    
    return(
        <div className = "conatiner container-fluid pt-1 border-dark" >
            
        <div className = "col-md-8 col-lg-12 col-sm-4 " >
        {
        data.map(record=>(
        <div key={record.id}>
             <div className="row ">
          
             <span classname=" ml-5 "> <img className = "rounded-circle" alt="img" height="30px" width="30px" src = { pic }/></span>
               <span className=" ml-5" >   {record.mname}</span>
               <span className="row ml-5" >{record.mdesig}</span> 
               <span className="ml-5"><FontAwesomeIcon onClick={showAlert}   icon={faPhone} className="fa-1x" /><FontAwesomeIcon onClick={showAlert}   icon={faPhone} className="fa-1x" /></span>  
        </div>
       
        </div>
        ))
        }
        
        </div>
    </div>
        
    )
}
export default Npimember
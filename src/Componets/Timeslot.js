import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
function Timeslot() {
    const [data, setData]=useState([]);
    
    const loadData=async()=>{
        await fetch("http://127.0.0.1:5000/timeslot")
        .then(response=>response.json())
        .then(recevieT=>{
            setData(recevieT.result)
            console.log(recevieT)
        })
    }

    useEffect(()=>{
        loadData()
        //getData();

    },[])
    
    return(
        
        <div className = "container" >
          
        <div className = "row " >
        {
        data.map(record=>(
        <div className="col-lm"key={record.id}>
         
          
            
         <button type="button" class="btn"><FontAwesomeIcon  icon={faSun}  className="fa-2x" color="orange" />{record.tm}</button> 
                
              
        </div>
       
   
        ))
        }
        
        </div>
    </div>
        
    )
}
export default Timeslot
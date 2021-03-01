import React, { useState, useEffect } from "react";
import pic from './hyundai.png'
function Npi() {
    const [data, setData]=useState([]);

    const loadData=async()=>{
        await fetch("http://127.0.0.1:5000/npi")
        .then(response=>response.json())
        .then(recevieD=>{
            setData(recevieD.res)
            console.log(recevieD)
        })
    }

    useEffect(()=>{
        loadData()
        //getData();

    },[])
    
    return(
        <div className = "conatiner container-fluid pt-1 border-dark pt-4" >
            
        <div className = "col-md-8 col-lg-12 col-sm-4 " >
        {
        data.map(record=>(
        <div key={record.nid}>
             <div className="row row pt-3 px-2">
          
             <span classname="pt-2 ml-5 "> <img className = "rounded-circle" alt="img" height="30px" width="35px" src = { pic }/></span>
               <span className=" ml-5 pull-right" >   {record.nname}</span>
              
        </div>
        </div>
        ))
        }
        
        </div>
    </div>
        
    )
}
export default Npi
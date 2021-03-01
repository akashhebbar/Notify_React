import React, { useState, useEffect } from "react";
import pic from './avatar.jpg'
function Leftpanel(props) {
    const [data, setData]=useState([]);
    
    const loadData=async()=>{
        await fetch("http://127.0.0.1:5000/ambassador")
        .then(response=>response.json())
        .then(recevieData=>{
            setData(recevieData.res)
            console.log(recevieData)
            
        })
    }

    useEffect(()=>{
        loadData()


    },[])
    
    return(
        <div className = " conatiner  pt-1  " >
        
        <div className = " row justify-content-left ml-4 " >
        {
        data.map(record=>(
        <div key={record.aid}>
           
             <div className="row px-2 ml-4 float-lg-right">
                 
             <span classname="pt-4 ml-4"> <br></br><br></br><img className = "rounded-circle" alt="img" height="40px" width="40px" src = { pic }/> <br></br></span>
             
              <span  classname="pt-0 px-4" onClick={
                  () => props.handleId(record.id)
              }>
                  
                  <span className="pt-3 ml-5 px-4"><br></br><br></br>{record.reason} </span> 
                  
               <span className=" d-flex align-items-end"  >{record.date_created.slice(11,16)}</span>
               
              </span>


              


        </div>
        </div>
        ))
        }
        
        </div>
    </div>
        
    )
}
export default Leftpanel
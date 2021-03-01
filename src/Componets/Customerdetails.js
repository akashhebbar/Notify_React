import React, { useState, useEffect } from "react";
function Customerdetails() {
    const [data, setData]=useState([]);

    const loadData=async()=>{
        await fetch("http://127.0.0.1:5000/ticket")
        .then(response=>response.json())
        .then(recevieI=>{
            setData(recevieI.result)
            console.log(recevieI)
        })
    }

    useEffect(()=>{
        loadData()
        //getData();

    },[])
    
    return(
        <div>
            
        <div >
        {
        data.map(record=>(
        <div key={record.cid}>
             <div>
          
               <span >   {record.cname}</span>
              
        </div>
        </div>
        ))
        }
        
        </div>
    </div>
        
    )
}
export default Customerdetails
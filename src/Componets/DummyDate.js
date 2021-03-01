import React, { Component } from "react";
import DateDisplay from './DateDisplay'
import Timeslot from "./Timeslot";
<link rel="stylesheet" type="text/css" href="dist/bootstrap-clockpicker.min.css"></link>
class DummyDate extends Component {
state ={
    visible:false
}
render()
{
    return(
        <div className="row pt-4 px-2 ml-4">
           
            <button type="button" className="btn btn-primary ml-4" onClick={()=>{
                this.setState({visible:true})
            }}>Net Step</button>
            <div className="ml-4">
             {this.state.visible ? <DateDisplay /> : null}
            
            </div>
            <div className="pt-5 px-2 ml-5">
            {this.state.visible ? <Timeslot/> : null}
            
            </div>
            
            
            
            

        </div>
        


      

    )
}

}
export default DummyDate;
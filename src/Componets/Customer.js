import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Rightpaneldata from "./Rightpaneldata";
<link rel="stylesheet" type="text/css" href="dist/bootstrap-clockpicker.min.css"></link>
class Customer extends Component {
state ={
    visible:false
}
render()
{
    return(
        <div className="row pt-4 px-2 ml-4">
           
            
           
            
            <div className="row justify-content-left pt-4">
    <span className="tab-space px-4" onClick={()=>{
                this.setState({visible:true})
            }}><FontAwesomeIcon  icon={faUser} className="fa-2x" color="blue"/></span>
    </div>
    <div className="ml-4">
             {this.state.visible ? <Rightpaneldata /> : null}
             
            </div>

        </div>
        


      

    )
}

}
export default Customer;
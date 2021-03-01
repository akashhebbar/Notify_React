import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import Rightpaneldata from "./Rightpaneldata";
<link rel="stylesheet" type="text/css" href="dist/bootstrap-clockpicker.min.css"></link>
class Rightpanel extends Component {
state ={
    visible:false
}
render()
{
    return(
        <div className="row pt-2 px-2">
            
            <div className="row pt-4 justify-content-left">
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
export default Rightpanel;
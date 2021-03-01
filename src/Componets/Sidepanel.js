import React from 'react'
import pic from './image-regular.svg'
const Sidepanel =()=>{
    
return(
    <div className="conatiner container-fluid pt-4 border-dark">
        <div className="row pt-4">
            <div className="col-md-8 col-lg-12 col-sm-4 px-4">
                <img src={pic} alt="logo" helight="30px" width="30px" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 col-lg-12 pt-4 col-sm-4 px-4">
                <img src={pic} alt="logo" helight="30px" width="30px" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 col-lg-12 pt-4 col-sm-4 px-4">
                <img src={pic} alt="logo" helight="30px" width="30px" />
            </div>
        </div>

    </div>

)


}

export default Sidepanel
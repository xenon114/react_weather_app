import React from 'react';
import profilelogo from '../../images/cc.jpg';

const Header = () =>
{
    return(
        
    <div className="row">
    <div className="col-md-12" style={{background:'#f4f3ef',height:'100px'}}>
          <div className="row">
             <div className="col-md-6" style={{paddingTop:'25px'}}>
                 <h4>Weather Information System</h4>
             </div>
             <div className="col-md-4">

             </div>
             <div className="col-md-2" style={{padding:'10px 20px 20px 10px'}}>
                 <img src={profilelogo} style={{height:'80px',float:'right',borderRadius:'40px'}}/>
             </div>
          </div>
    </div>

</div>
    );
 
}


export default Header;
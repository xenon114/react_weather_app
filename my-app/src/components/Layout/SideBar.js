import React from 'react';
import './SideBar.css';

const SideBar = (props) =>
{
    return(
        
        
        <div className="col-md-2" style={{background:'#382a2a',minHeight:'600px'}}>
              <div className="row">
              <div className="col-md-12">
                <button class="btn btn-primary side_btn" onClick={props.onPressDash}>Dashboard View</button>
                </div>
                <div className="col-md-12">
                <button class="btn btn-primary side_btn" onClick={props.onPressSearch}>Search City Weather</button>
                </div>
                <div className="col-md-12">
                <button class="btn btn-primary side_btn" onClick={props.onPressList}>City Weather Listing</button>
                </div>
              </div>
        </div>
    
    
        );
}


export default SideBar;
import React from 'react'
import './Popup.css'
import success from '../../assets/success-svgrepo-com.svg'

function Popup(props) {
    
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <img src={success}></img>
            <h2>Thank you for contacting us!</h2>
            <p>We'll reply soon.</p>
            <button className='close-btn' onClick={()=>props.setTrigger(false)}>Continue</button>
        </div>     
    </div>
  ) : ""
}

export default Popup
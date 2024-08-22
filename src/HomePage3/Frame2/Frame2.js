import React from 'react'
import './Frame2.css'


function Frame2({Logo,title,text}) {
    return (
       <div className='main-container7'>
            <img src={Logo}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}
  
  export default Frame2;
  
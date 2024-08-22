import React from 'react'
import './Frame1.css'


function Frame1({number,title,text}) {
    return (
       <div className='main-container5'>
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
    );
}
  
  export default Frame1;
  
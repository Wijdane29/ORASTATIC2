import React from 'react'
import './SecondSection.css'
import phone1 from '../../assets/Group 1212.png'
import phone2 from '../../assets/Group 1211.png'




function SecondSection() {
    return (
       <div className='main-container2'>
           <img src={phone1} alt="Phone-Picture1" className='Phone-Picture1'/>
           <img src={phone2} alt="Phone-Picture1" className='Phone-Picture2'/>
        </div>
    );
}
  
  export default SecondSection;
  
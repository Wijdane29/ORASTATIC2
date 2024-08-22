import React from 'react'
import './FourthSection.css'
import {ReactComponent as Star} from '../../assets/Star.svg'
import {ReactComponent as EmptyStar} from '../../assets/EmptyStar.svg'
import circels from '../../assets/Group 1239.png'
import SocialButton from '../../Social Button/SocialButton'
import {ReactComponent as AppleIcon} from '../../assets/apple.svg'
import {ReactComponent as PlayStoreIcon} from '../../assets/playstore.svg'
import phone1 from '../../assets/HERO iPhone 1.png'
import phone2 from '../../assets/HERO iPhone 2.png'
import phone3 from '../../assets/HERO iPhone 3.png'


function FourthSection() {
    return (
       <div className='Container'>
       <div className='firstSection'>
            <div className='part1'>
                <p>Lorem ipsum dolor sit amet</p>
                <h1>4.9</h1>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <EmptyStar/>
                <h6>7,650 Avis</h6>

            </div>
            <div className='middle-container'>
                <div className='part2'>
                    <h3>John doe</h3>
                    <h4>10 mai 2023</h4> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>   
                </div>
                <div className='part3'>
                    <img src={circels}/>
                </div>
            </div>
            <div className='part4'>
                <p>Lorem ipsum</p>
                <div className="Btn-container">
                    <SocialButton Icon={AppleIcon}  iconColor="rgba(94, 97, 117, 1)" title="Appstore" backgroundColor="rgba(255, 255, 255, 1)"/>
                    <SocialButton Icon={PlayStoreIcon}  iconColor="rgba(94, 97, 117, 1)" title="Playstore" backgroundColor="rgba(255, 255, 255, 1)"/>
                </div>
            </div>
       </div>
       <div className='phones'>
            <img src={phone3} className='phone1'/>
            <img src={phone2} className='phone2'/>
            <img src={phone1} className='phone3'/>    
        </div>
       </div>
    );
}
  
  export default FourthSection;
  
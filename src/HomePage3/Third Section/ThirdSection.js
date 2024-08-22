import React from 'react'
import './ThirdSection.css'
import Frame1 from '../Frame1/Frame1'
import Frame2 from '../Frame2/Frame2'
import Map from '../../assets/Map.png'
import wallet from '../../assets/wallet.png'
import messagerie from '../../assets/messagerie.png'
import cartShopping from '../../assets/cart-shopping.png'
import users from '../../assets/users.png'
import SocialButton from '../../Social Button/SocialButton'
import {ReactComponent as AppleIcon} from '../../assets/apple.svg'
import {ReactComponent as PlayStoreIcon} from '../../assets/playstore.svg'



function ThirdSection() {
    return (
        <>
         <div className='main-container3'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        </div>
        <div className='main-container4'>
            <div>
            <Frame1 number="+ 10,000" title="Duis aute irure dolor in sit amet consectet" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." /> 
            <Frame1 number="+ 520" title="In voluptate velit essem" text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam." /> 
            <Frame1 number="+ 95" title="Eu fugiat nulla pariatu adipiscing elit" text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." /> 
            </div>
            <div className='map-container'>
                <img src={Map} />
            </div>
            <div>
            <Frame1 number="+ 10,000" title="Duis aute irure dolor in sit amet consectet" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." /> 
            <Frame1 number="+ 520" title="In voluptate velit essem" text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam." /> 
            <Frame1 number="+ 95" title="Eu fugiat nulla pariatu adipiscing elit" text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." /> 
            </div>
        </div>
        <div className='main-container6'>
            <div className='frame-container'>
                <Frame2 Logo={wallet} title="Wallet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 
                <Frame2 Logo={messagerie} title="Messagerie" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 
                <Frame2 Logo={cartShopping} title="Recharges & Factures" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 
                <Frame2 Logo={users} title="Communautés" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." /> 
            </div>
            <div className='main-container8'>
                <h2>Ne manquez pas l'opportunité de découvrir ORA</h2>
                <p>ORA est en train de devenir une référence incontournable pour les Marocains en matière de e-commerce et de réseaux sociaux.</p>
                <div className="btn-container">
                <SocialButton Icon={AppleIcon}  iconColor="rgba(255, 255, 255, 1)" title="Appstore" backgroundColor="rgba(29, 177, 142, 1)"/>
                <SocialButton Icon={PlayStoreIcon}  iconColor="rgba(255, 255, 255, 1)" title="Playstore" backgroundColor="rgba(29, 177, 142, 1)"/>
                </div>
            </div>

        </div>
        </>
      
    );
}
  
  export default ThirdSection;
  
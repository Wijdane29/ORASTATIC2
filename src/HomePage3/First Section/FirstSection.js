import React from 'react'
import './FirstSection.css'
import SocialButton from '../../Social Button/SocialButton'
import {ReactComponent as AppleIcon} from '../../assets/apple.svg'
import {ReactComponent as PlayStoreIcon} from '../../assets/playstore.svg'
import {ReactComponent as Star} from '../../assets/Star.svg'
import {ReactComponent as EmptyStar} from '../../assets/EmptyStar.svg'


function FirstSection() {
    return (
       <div className='main-container'>
            <h4>DÉCOUVREZ LA SUPER-APP ORA</h4>
            <h1>Votre nouvelle façon de vendre, acheter et partager en ligne.</h1>
            <p>Chez ORA, notre mission est de rendre l'achat et la vente en ligne plus facile et plus accessible à tous les Marocains.</p>
            <h4 className='title-btns'>TÉLÉCHARGER DÈS MAINTENANT</h4>
            <div className="btn-container">
                <SocialButton Icon={AppleIcon}  iconColor="rgba(255, 255, 255, 1)" title="Appstore" backgroundColor="rgba(29, 177, 142, 1)"/>
                <SocialButton Icon={PlayStoreIcon}  iconColor="rgba(255, 255, 255, 1)" title="Playstore" backgroundColor="rgba(29, 177, 142, 1)"/>
            </div>
          <div className='rating-container'>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <EmptyStar/>
              <h2>4.9</h2>
          </div>
        </div>
    );
}
  
  export default FirstSection;
  
import React from 'react'
import {ReactComponent as LogoRed} from '../../assets/logoRed.svg'
import {ReactComponent as AproposIcon} from '../../assets/AproposIcon.svg'
import {ReactComponent as DevenezIcon} from '../../assets/devenezIcon.svg'
import {ReactComponent as InfoIcon} from '../../assets/infoIcon.svg'

import {ReactComponent as Instagram} from '../../assets/instagramIcon.svg'
import {ReactComponent as Facebook} from '../../assets/facebookIcon.svg'
import {ReactComponent as Tiktok} from '../../assets/tiktokIcon.svg'
import {ReactComponent as Twitter} from '../../assets/twitterIcon.svg'
import {ReactComponent as Linkedin} from '../../assets/LinkedinIcon.svg'

import './Footer.css'

function Footer() {
    return (
        <footer className='container-footer'>
            <div className="container-logos">
                <div className='block block1'>
                    <LogoRed className='OraLogo'/>
                    <p className="firsParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='block block3'>
                    <div className='logo-header'>
                        <AproposIcon/>
                        <h2>À propos</h2>
                    </div>
                    <div className='block2'>
                        <div className='separator'></div>
                        <p className="secondParagraph">
                        <span>Accueil</span>
                        <span>Contactez-nous</span>
                        <span>Aide & FAQ</span>
                        </p>
                    </div>
                </div>
                <div className='block block4'>
                    <div className='logo-header'>
                        <DevenezIcon/>
                        <h2>Devenez</h2>
                    </div>
                    <div className='block2'>
                        <div className='separator'></div>
                        <p className="thirdParagraph">
                        <span>Vendeur</span>
                        <span>Prestataire de service</span>
                        <span>Livreur</span>
                        </p>
                    </div>
                </div>
                <div className='block block5'>
                    <div className='logo-header'>
                        <InfoIcon/>
                        <h2>Informations</h2>
                    </div>
                    <div className='block2'>
                        <div className='separator'></div>
                        <p className="fourthParagraph">
                        <span>Conditions Générales d'Utilisation</span>
                        <span>Notifications sur la confidentialité</span>
                        <span>Notifications sur les cookies</span>
                        </p>  
                    </div>
                </div>      
            </div>
            <div className='social-media-container'>
                <p >Suivez-nous</p>
                <div className='social-media-logos'>
                    <Instagram className='ig'/>
                    <Facebook className='fb'/>
                    <Tiktok className='tk'/>
                    <Linkedin className='ld'/>
                    <Twitter className='tw'/>
                </div>
            </div>
            <div className="footer-container">
                <div className='sep-container'></div>
                <div className='copyright-text'>
                    Copyright &copy; 2021, Tous les droits sont réservés. ORA
                </div>
            </div>

            </footer>
    );
}
  
  export default Footer;
  
import React from 'react'
import Header from '../HomePage4/Header/Header'
import Footer from '../HomePage4/Footer/Footer'
import FirstSection from './First Section/FirstSection'
import SecondSection from './Second Section/SecondSection'
import ThirdSection from './Third Section/ThirdSection'
import FourthSection from './Fourth Section/FourthSection'
import FifthSection from './Fifth Section/FifthSection'
import './HomePage3.css'

function HomePage3() {
    return (
       <>
       <Header/>
       <main className="mainSection2">
          <FirstSection/>
          <SecondSection/>
       </main>
       <ThirdSection/>
       <FourthSection/>
       <FifthSection/>
       <Footer/>
       </>
    );
}
  
  export default HomePage3;
  
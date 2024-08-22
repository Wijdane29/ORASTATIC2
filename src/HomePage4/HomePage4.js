import React from 'react'
import Header  from './Header/Header'
import FirstSection from './First Section/FirstSection'
import SecondSection from './Second Section/SecondSection';
import './HomePage4.css'
import Footer from './Footer/Footer'

function HomePage4() {
  return (
   <>
    <Header/>
    <main className="mainSection">
      <FirstSection/>
      <SecondSection/>
    </main>
    <Footer/>
   </>
  );
}

export default HomePage4;

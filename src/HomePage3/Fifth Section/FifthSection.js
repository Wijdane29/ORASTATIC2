import React from 'react'
import './FifthSection.css'

function FifthSection() {
    return (
       <div className='fifth-container'>
        <h1>Ne manquez pas l'opportunité de découvrir ORA</h1>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <form className='main-form'>
            <input type="text" className='input-text' placeholder='Nom et prénom'></input>
            <input type="email" className='input-email' placeholder='Adresse email'></input>
            <button>S’inscrire à la newsletter</button>
        </form>
        <div></div>
       </div>
    );
}
  
  export default FifthSection;
  
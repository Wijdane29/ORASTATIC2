import React,{useState} from 'react'
import './SecondSection.css'
import { FlagIcon } from 'react-flag-kit';
import countries from '../countries.json';
import Select from 'react-select';
import Popup from '../Popup/Popup'

function SecondSection() {
  // const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  // const defaultCountry = countries.find(country => country.code === 'FR'); // Remplace 'FR' par le code du pays par défaut
  const [selectedCountry, setSelectedCountry] = useState();
  const [fullName,setFullName]=useState();
  const [email,setEmail]=useState();
  const [telephone,setTelephone]=useState();
  const [helpText,setHelpText]=useState();
  const [conditionAccepted,setconditionAccepted]=useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  const handleFullNameChange = (event)=>{
    setFullName(event.target.value)
  }
  const handleEmailChange = (e)=>{
    setEmail(e.target.value);
  }
  const handleTeleChange = (e)=>{
    setTelephone(e.target.value);
  }
  const handleHelpTextChange=(e)=>{
    setHelpText(e.target.value);
  }
  const handleConditionChange=(e)=>{
    setconditionAccepted(e.target.checked);
  }
  // const handleSubmit=()=>{
  //   setPopupVisible(true)
  //   console.log(selectedCountry)
  //   console.log(fullName)
  //   console.log(email)
  //   console.log(telephone)
  //   console.log(helpText)
  //   console.log(conditionAccepted)
  // }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    setPopupVisible(true); // Show the popup
  };



  const options = countries.map(country => ({
    value: country.code,
    label: (
      <div>
        <FlagIcon code={country.code} />
        {country.name}
      </div>
    ),
  }));

  return (
    <>
   <form className='contact-form' onSubmit={handleSubmit}>
    <div class="input-container">
      <input type="text"  id="fullName" value={fullName} onChange={handleFullNameChange} name="fullName" placeholder='Nom et Prénom' required></input>
      <input type="email"  id="email" value={email} onChange={handleEmailChange} name="email" placeholder='Adresse email' required></input>
    </div >
      <div className="select-container">
        <Select className="custom-select" name="country" value={selectedCountry}
          onChange={handleCountryChange} options={options} required
          
          formatOptionLabel={(option) => (
            <div className="container-flagIcon">
              <FlagIcon code={option.value} className="flag-icon"/>
            </div>
          )}
          components={{ IndicatorSeparator: () => null }}
        />
        
       <input type="text"   id="phoneNumber" value={telephone} onChange={handleTeleChange}  name="phoneNumber" placeholder='Numéro de téléphone' required></input>
      </div>
      
      <textarea type="text"  className="help-textArea" value={helpText} onChange={handleHelpTextChange}  name="help" placeholder='Dites-nous en quoi nous pouvons vous aider ...' required></textarea>
      <div className='condition-container'>
        <input type="checkbox" id="subscribe" value={conditionAccepted} onChange={handleConditionChange} name="subscribe" required></input>
        <label for="subscribe">Je comprends et j'accepte <span>la politique de confidentialité</span></label>
      </div>
      <button className='btn-message' >Envoyer le message</button>   
  </form>
  <Popup trigger={isPopupVisible} setTrigger={setPopupVisible}></Popup>
  </>
  );
}

export default SecondSection;

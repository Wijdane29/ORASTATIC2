import React from 'react'
import './SocialButton.css'
import PropTypes from 'prop-types';
function SocialButton({ Icon, iconColor, title, backgroundColor}) {
  return (
    <div>
        <button className="Button" style={{backgroundColor:backgroundColor}}>
          <Icon style={{ fill: iconColor }} className="Icon" />
          <span style={{color:iconColor}} className="span">{title}</span>
        </button>
    </div>
  );
}

export default SocialButton;

SocialButton.propTypes = {
  Icon: PropTypes.elementType.isRequired, // Expecting a React component
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Switch from 'react-switch';

const CookieService = ({ id, title, policyUrl, onChange, checked }) => {
  const [switchCheked, setSwitchChecked] = useState(checked);
  const handleCheck = (check) => {
    setSwitchChecked(check);
    onChange(check);
  };

  return (
    <div>
      <p>{title}</p>

      <a href={policyUrl} target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      <Switch onChange={handleCheck} checked={switchCheked} offColor="#6d6e71" onColor="#398147" />
    </div>
  );
};

export default CookieService;

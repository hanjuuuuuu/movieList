import React from 'react'
import { ReactComponent as logoImageUrl } from '../img/Untitled.svg';

const AdPage = ({ showAd }) => {
  return (
    <div>
        {showAd ? <img src={logoImageUrl}/> : null}
    </div>
  );
};

export default AdPage;


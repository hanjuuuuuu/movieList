import React from 'react'

const AdPage = ({ showAd }) => {
    const logoImageUrl = '../img/Untitled.svg'
  return (
    <div>
        {showAd ? <img src={logoImageUrl}/> : null}
    </div>
  );
};

export default AdPage;


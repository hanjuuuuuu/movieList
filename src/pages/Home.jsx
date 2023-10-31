import React from 'react'
import { useState } from 'react';
import AdPage from '../Components/AdPage';

const Home = () => {
  const [showAd, setShowAd] = useState(true);

  const handleShowAd = () => {
    setShowAd(true);
  }

  const handleHideAd = () => {
    setShowAd(false);
  }

  return (
    <div>
      {showAd ? (
        <div>
          <AdPage showAd={showAd} />
          <button onClick={handleHideAd}>광고 안보기</button>
        </div>
      ) : (
        <button onClick={handleShowAd}>광고 보기</button>
      )}
    </div>
  );
}

export default Home;


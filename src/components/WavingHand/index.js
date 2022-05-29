import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WavingHand = ({ className }) => {
  const [isWaving, setWave] = useState(true);
  return (
    <div
      className={`cursor-pointer ${className || ''} ${
        isWaving ? 'animate-wave' : ''
      }`}
      onAnimationEnd={() => setWave(false)}
      onClick={() => {
        setWave(true);
      }}
      style={{
        transformOrigin: '70% 70%',
      }}
    >
      <StaticImage
        src="../../images/emoji-waving-hand.png"
        alt="Waving hand emoji"
        width={80}
        style={{
          borderRadius: '30%',
        }}
      />
    </div>
  );
};

export default WavingHand;

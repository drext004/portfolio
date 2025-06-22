import React, { useState } from 'react';
import meCard from '../src/assets/meCard.svg';
import figmaCard from '../src/assets/figmaCard.svg';
import aeCard from '../src/assets/aeCard.svg';
import './CardStack.css'; 

const CardStack = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`cardContainer ${isHovered ? 'hovering-center' : ''}`}>
      <div className="card aeCard">
        <img src={aeCard} alt="AE Card" />
      </div>

      <div
        className="card meCard"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={meCard} alt="Me Card" />
      </div>

      <div className="card figmaCard">
        <img src={figmaCard} alt="Figma Card" />
      </div>
    </div>
  );
};

export default CardStack;
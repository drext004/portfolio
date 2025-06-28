import { useState } from 'react';
import aeCard from './assets/aeCard.svg';
import meCard from './assets/meCard.svg';
import figmaCard from './assets/figmaCard.svg';
import './CardStack.css';
import Footer from './footer.js';

const cards = [
  { src: aeCard, alt: "AE Card" },
  { src: meCard, alt: "Me Card" },
  { src: figmaCard, alt: "Figma Card" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return "centerCard";
    if (diff === -1 || diff === 2) return "leftCard";
    if (diff === 1 || diff === -2) return "rightCard";
    return "";
  };

  return (
    <div className="stack">
      <div className="cardCarouselWrapper">
        <button className="navButton navLeft" onClick={rotateLeft}>⟵</button>
        <div className="cardContainer">
          {cards.map((card, index) => (
            <div key={index} className={`card ${getCardPosition(index)}`}>
              <img src={card.src} alt={card.alt} />
            </div>
          ))}
        </div>
        <button className="navButton navRight" onClick={rotateRight}>⟶</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

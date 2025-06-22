import  { useState } from 'react';
import aeCard from './assets/aeCard.svg';
import meCard from './assets/meCard.svg';
import figmaCard from './assets/figmaCard.svg';
import "./CardStack.css"

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <><div className="stack">
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
      </div><div className="footer">
              <div className="findMe">
                  <h2>Find Me On</h2>
                  <div className="profileLinks">
                      <a href="https://www.linkedin.com/in/atharv-dhari-b66149288/">LinkedIn</a>
                      <a href="https://www.instagram.com/atharvdhari004/">Instgram</a>
                  </div>
              </div>
              <div className="contact">
                  <h2>Contact</h2>
                  <a href="mailto:atharvdhari217@gmail.com">atharvdhari217@gmail.com</a>
              </div>
          </div></>
  );
};

export default Home;
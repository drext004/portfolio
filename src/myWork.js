import figmaCard from '../src/assets/figmaCard.svg';
import aeCard from '../src/assets/aeCard.svg';
import "./MyWork.css";


const MyWork = () => {
    return (
        <div className="portfolioCardContainers">
            <img src={aeCard} alt="Motion Graphics work" className="workAeCard" />
            <img src={figmaCard} alt="UI/UX and Design work" className="workFigmaCard" />
        </div> 
        
     );
}
 
export default MyWork;
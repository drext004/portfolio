
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './footer.js';
import './index.css';
import NavBar from './NavBar.js';
import MyWork from './myWork.js';
// import CardStack from "./stack.js";
import Home from "./Home.js"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <div className="contents">      
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/myWork" element={<MyWork />} />
      </Routes>  
      </div>      
    </div>
    </BrowserRouter>
  );
}

export default App;

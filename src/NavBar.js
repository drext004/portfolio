import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
        <div className="TopBar">
            <div className="getDrext">getDrext</div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/myWork"> My Work </Link>
                <a href="a"> About Me </a>
                <a href="a"> Contact </a>
            </div>
            <div className="CTA"> <button>Hire me!</button> </div>
        </div>
     );
}
 
export default NavBar;
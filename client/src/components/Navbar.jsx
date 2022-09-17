import "./css/Navbar.css";
import logo from "../assets/Intranet.png" 
import { Link } from 'react-router-dom';


function Deconnect(){
  localStorage.clear()
  window.location = "/";
}

function Navbar() {
    
return (
  <div>
<header>
 <img className="logo" src={logo} alt="logo"/>
 <nav>
    <ul className="nav_links">
      <Link to="/Liste"><li>Liste</li></Link>
    </ul>
 </nav>
 <button onClick={Deconnect}>Deconnexion</button>
</header> 

</div>
);
};

export default Navbar;
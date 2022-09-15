import "./css/Navbar.css";
import logo from "../assets/morg.png" 

const Navbar = () => {
    
return (
  <div>
<header>
 <img className="logo" src={logo} alt="logo"/>
 <nav>
    <ul className="nav_links">
        <li><a href="#">Liste</a></li>
    </ul>
 </nav>
 <a className="cta" href="#"><button>Deconnexion</button></a>
</header> 

</div>
);
};

export default Navbar;
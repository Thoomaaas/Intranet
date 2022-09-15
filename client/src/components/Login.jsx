import "./css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
    
return (
  <div>

<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="/"/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Mot de passe</label>
    </div>
    <a href="#">
      <Link to={`/aleatoire`}>se connecter</Link>
    </a>
  </form>
</div>


</div>
);
};

export default Login;
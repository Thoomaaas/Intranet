import "./css/Liste.css";
import logo from "../assets/morg.png" 
import APIService from "../services/APIService";


const Liste = ({collaborator}) => {
   
    return (
      <div>
    
    <div className="wrapper2">
  <div className="team">
    <div className="team_member">
      <div className="team_img">
        <img src={collaborator.photo} alt="Team_image"/>
      </div>
      <h3>{collaborator.firstname} {collaborator.lastname}</h3>
      <p className="role">{collaborator.city}, {collaborator.country}</p>
      <p>{collaborator.email}</p>
      <p>{collaborator.phone}</p>
      <p>{collaborator.birthdate}</p>
    </div>

  </div>
</div>
    
</div>
    );
    };
    
    export default Liste;
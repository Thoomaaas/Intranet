import "./css/Aleatoire.css";
import APIService from "../services/APIService";


const Aleatoire = ({collaborator}) => {
 

    return (
      <div>
<div className="wrapper">
<h1>NOTRE EQUIPE</h1>
  <h2>La plate-forme de l'entreprise qui vous permet de retrouver tous nos collaborateurs</h2>
  <div className="team">
    <div className="team_member">
      <div className="team_img">
        <img src={collaborator.photo} alt="Team_image"/>
      </div>
      <h3>{collaborator.firstname} {collaborator.lastname}</h3>
      <p className="role">{collaborator.city}, {collaborator.country}</p>
      <p>{collaborator.email}</p>
      <p>{collaborator.phone}</p>
      <p>Anniversaire: {collaborator.birthdate}</p>
    </div>

  </div>
</div>
    
    </div>
    );
    };
    
    export default Aleatoire;
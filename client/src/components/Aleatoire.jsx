import "./css/Aleatoire.css";
import logo from "../assets/morg.png" 


const Aleatoire = () => {
    
    return (
      <div>
    
    <div class="wrapper">
  <h1>NOTRE EQUIPE</h1>
  <h2>La plate-forme de l'entreprise qui vous permet de retrouver tous nos collaborateurs</h2>
  <div class="team">
    <div class="team_member">
      <div class="team_img">
        <img src={logo} alt="Team_image"/>
      </div>
      <h3>Alex Wood</h3>
      <p class="role">Support Lead</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Est quaerat tempora, voluptatum quas facere dolorum aut cumque
         nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
    </div>
  </div>
</div>
    
    
    </div>
    );
    };
    
    export default Aleatoire;
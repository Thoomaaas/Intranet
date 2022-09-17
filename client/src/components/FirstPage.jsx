import Navbar from './Navbar'
import Aleatoire from './Aleatoire';
import { useState, useEffect } from "react";
import APIService from "../services/APIService";

function FirstPage () {

       
  const [randomCollaborator, setRandomCollaborator] = useState(null);

  const getRandom = async () => {
    const data = await APIService.getRandomCollaborator();

    setRandomCollaborator(data);
  };

  useEffect(() => {
    getRandom();
  }, []);
    
    return(
        <div className="FirstPage">
            <Navbar/>
            {randomCollaborator && <Aleatoire collaborator={randomCollaborator} />}
            <button className="random" onClick={getRandom}>Voir quelqu'un d'autre</button>

        </div>
    )
}

export default FirstPage;
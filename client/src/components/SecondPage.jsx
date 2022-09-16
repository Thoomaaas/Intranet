import Navbar from './Navbar'
import Liste from './Liste';
import { useState, useEffect } from "react";
import APIService from "../services/APIService";


function SecondPage () {
    
    const [collaborators, setCollaborators] = useState([]);

  const getAllCollaborator = async () => {
    const data = await APIService.getAllCollaborators();

    setCollaborators(data);
  };

  useEffect(() => {
    getAllCollaborator();
  }, []);

    return(
        <div className="SecondPage">
            <Navbar/>
            {collaborators.map((collaborator) => (
              <Liste collaborator={collaborator} key={collaborator.id} />
            ))}
        </div>
    )
}

export default SecondPage;
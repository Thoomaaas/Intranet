import Navbar from './Navbar'
import Liste from './Liste';
import { useState, useEffect } from "react";
import APIService from "../services/APIService";
import "./css/Liste.css";



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
            <div className='row'>
            {collaborators.map((collaborator) => (
              <Liste collaborator={collaborator} key={collaborator.id} />
            ))}
            </div>
        </div>
    )
}

export default SecondPage;

import "../styles/App.scss";
import { useState, useEffect } from "react";
import {getCharacteres} from '../services/Characteres.service'
import CardList from "./CardList";


function App() {
// Creo mi VE donde voy a guardar los datos de mi api//

  const[characteres, setCharacters] = useState ([]);

  
  useEffect(() => {
    getCharacteres().then(data=>{setCharacters(data);})
  }, [])
  return (<CardList characteres={characteres}/>)
  
}


export default App;

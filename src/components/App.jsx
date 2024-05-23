
import "../styles/App.scss";
import { useState, useEffect } from "react";
import {getCharacteres} from '../services/Characteres.service'
import CardList from "./CardList";
import FilterByName from "./FilterByName";


function App() {
// Creo mi VE donde voy a guardar los datos de mi api//

  const[characteres, setCharacters] = useState ([]);

  const[nameFilter, setNameFilter] = useState ("")

  
  useEffect(() => {
    getCharacteres().then(data=>{setCharacters(data);})
  }, [])

  return (
  <>
   <FilterByName setNameFilter={setNameFilter}/>
  <CardList characteres={characteres}/> 
  
 
  </>
  )  

  
}


export default App;

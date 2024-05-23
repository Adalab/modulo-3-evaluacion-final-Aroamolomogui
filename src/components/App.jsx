
import "../styles/App.scss";
import { useState, useEffect } from "react";
import {getCharacteres} from '../services/Characteres.service'
import CardList from "./CardList";
import FilterByName from "./FilterByName";


function App() {
// Creo mi VE donde voy a guardar los datos de mi api//
  const[characteres, setCharacters] = useState ([]);
//ve donde recogo los datos que escribe el usuario en la búsqueda del input//
  const[name, setName] = useState ("")

  
  useEffect(() => {
    getCharacteres().then(data=>{setCharacters(data);})
  }, [])
/* operador ternario: si nameFilter es un valor verdadero entonces alguien ha escrito un name, entonces devuélveme a todos los que sean igual que genderFilter y si no retorna true*/

  const filterDataName = ((item)=> nameFilter ? nameFilter === item.name : true )

  /* si el nameFilter es diferente a "" quiere decir que ya se ha escrito un name
  if(nameFilter !== ""){ entonces retorna el item cuyo name sea igual al escrito
    return item.name === nameFilter 
  } else { y si no devuelve a todos
    retur true
  }
  
  */
  return (
  <>
   <FilterByName setName={setName} name={name}/>
  <CardList characteres={characteres}/> 
  
 
  </>
  )  

  
}


export default App;

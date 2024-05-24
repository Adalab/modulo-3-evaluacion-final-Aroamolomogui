
import "../styles/App.scss";
import { useState, useEffect } from "react";
import {getCharacteres} from '../services/Characteres.service'
import CardList from "./CardList";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";


function App() {
// Creo mi VE donde voy a guardar los datos de mi api y el contenedor es un array//
  const[characteres, setCharacteres] = useState ([]);
//ve donde recojo los datos que escribe el usuario en la búsqueda del input//
  const[name, setName] = useState ("")
  //VE donde guardo la specie sellecionada tipo de dato string//
  const[speciesFilter, setSpeciesFilter] = useState("")

  //Bloque de código que react me da para que se ejecute una sola vez, vuelvo a usar el then que me devuelve una promesa que es el objeto modificado//
  useEffect(() => {
    getCharacteres().then((newArray) =>{setCharacteres(newArray);})
  }, [])

/* operador ternario: si nameFilter es un valor verdadero entonces alguien ha escrito un name, entonces devuélveme a todos los que sean igual que genderFilter y si no retorna true*/

  // const filterDataName = ((item)=> nameFilter ? nameFilter === item.name : true )

  /* si el nameFilter es diferente a "" quiere decir que ya se ha escrito un name
  if(nameFilter !== ""){ entonces retorna el item cuyo name sea igual al escrito
    return item.name === nameFilter 
  } else { y si no devuelve a todos
    retur true
  }
  
  */
//filtro para que me devuelva el name que introduce el usuario//

 const filterData = characteres.filter((item) => {
  
  if (name.length === 0) {
    return item //si name VE donde escribe el usuario está vació incluye a todos los personajes//
  } else {
    return item.name.toLowerCase().includes(name.toLowerCase()); //Cuando el usuario introduzca un valor en el input filtramelo//
  }

})
  return (
  <>
   <FilterByName setName={setName} name={name} />
   <FilterBySpecies setSpeciesFilter={setSpeciesFilter}/>
   <CardList characteres={filterData} /> 
   

  
 
  </>
  )  

  
}


export default App;

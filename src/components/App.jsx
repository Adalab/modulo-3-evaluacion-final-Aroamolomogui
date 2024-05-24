
import "../styles/App.scss";
import { useState, useEffect } from "react";
import {getCharacteres} from '../services/Characteres.service'
import CardList from "./CardList";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import Details from "./Details"
import { Routes,Route, useLocation, matchPath } from "react-router-dom";




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

//filtro para que me devuelva el name que introduce el usuario//

 const filterData = characteres.filter((item) => {
  
  if (name.length === 0) {
    return item //si name VE donde escribe el usuario está vació incluye a todos los personajes//
  } else {
    return item.name.toLowerCase().includes(name.toLowerCase()); //Cuando el usuario introduzca un valor en el input filtramelo//
  }
 
})
// OJO! Filtro encadenado para el select de species: Creo otra función que recibirá a cada item (character/personaje) haciendo un operador ternario para pedirle que oye speciesFilter es verdadero? contiene algún valor? alguien ha seleccionado algo? por que s diferente a (""), undefined, null o (0), entonces que speciesFilter sea = a la specie del personaje y si no retorna true (retorna a todos)//
.filter((item)=> speciesFilter ? speciesFilter === item.species: true )


/*1. ¿Estoy en la ruta dinámica /detail/:id?*/
const {pathname} = useLocation()
console.log(pathname)
/*2.Sacar el id de la ruta :id - valida si estoy en la ruta dinámica, si no en el siguiente punto devuelve null*/
const characterRoute = matchPath("/detail/:id", pathname)
console.log(characterRoute)
//si la ruta coincide obtengo el id enviado por parámetros//
const characterIdUrl = characterRoute ? characterRoute.params.id : null
/*3.de mi array de personajes busca el personaje cuyo id sea = al personaje que me has mandado por la Url
*4.Buscar el personaje que tiene el id seleccionado(find) y enviarlo por props a Detail mi componente*/
const characterDetail = characteres.find(name=> name.id === parseInt
(characterIdUrl))
console.log(characterDetail)

  return (
    <>

    <Routes>
      <Route path="/" element={
        <>
        <FilterByName setName={setName} name={name} />
        <FilterBySpecies setSpeciesFilter={setSpeciesFilter} speciesFilter={speciesFilter}/>
        <CardList characteres={filterData} /> 
      </>
} />
      <Route path="/detail/:id" element={<Details characterDetail={characterDetail} characteres={characteres}/>}/>

    


    </Routes>
    </>
  )  
}


export default App;

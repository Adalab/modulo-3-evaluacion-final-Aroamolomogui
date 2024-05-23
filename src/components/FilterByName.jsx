
function FilterByName({setName,name}) {
 

//cre0 mi función que cambia la VE cuando el usuario mete un valor new//
  const handleChangeInput = (ev)=>{
  //evito que al dar intro se refresque la página//
    ev.preventDefault()
    //cuando cambia cojo lo que es usuario escribe//
    setName(ev.target.value)
    } 
    //creo una función para que me devuelva al estado original este input//
    const handleClick = ()=> {
      //Al darle a reset deja el input name en vacio//
      setName ("")
  }
  return <>
  
    <form className="form" >
      <label className="form__text" htmlFor=""> Holis!! ¿Preparada para encontrar tu person favorito? Búscame:</label>
      <input className="form__input" onChange={handleChangeInput} type="text" name="" id="" value={name} />
      <input type="submit"  value="Reset" onClick= {handleClick} />
      {/* <p> Hey! Me encontraste! {name}</p> */}

    </form>
  </>;
}

export default FilterByName;


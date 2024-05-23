
function FilterByName({setName,name}) {

  const handleChangeInput = (ev)=>{
    //cuando cambio cojo lo que es usuario escribe//
    setName(ev.target.value)
    } 
    const handleClick = ()=> {
      //quiero que ese bntn al darle a reset me deje el input name en vacio//
      setName ("")
  }
  return <>
  
    <form onSubmit={(ev) => {ev.preventDefault() }}>
      <input type="text" name="name" id="name" onChange={handleChangeInput} value={name}/>
      <input type="submit"  value="Reset" onClick= {handleClick} />
    </form>
    <p> Hey! Encontraste a {name}</p>
  </>;
}

export default FilterByName;


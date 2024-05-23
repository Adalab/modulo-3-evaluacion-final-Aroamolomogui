
function FilterByName({setName,name}) {

  const handleChangeInput = (ev)=>{
    setName(ev.target.value)
  }
  return <>
    <form action="">
      <input type="text" name="name" id="name" onChange={handleChangeInput}/>
      <input type="submit"  value="Reset" />
    </form>
    <p> Hey! Encontraste a {name}</p>
  </>;
}

export default FilterByName;


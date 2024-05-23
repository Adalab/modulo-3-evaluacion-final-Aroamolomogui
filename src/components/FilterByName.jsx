
function FilterByName({setNameFilter}) {

  const handleChange = (ev)=>{
    setNameFilter(ev.target.value)
  }
  return <div>
    <select name="" id="" onChange={handleChange}>
      <option value="name">Nombre</option>

    </select>
  </div>;
}

export default FilterByName;


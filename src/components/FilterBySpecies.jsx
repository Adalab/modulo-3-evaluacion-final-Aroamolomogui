


function FilterBySpecies({setSpeciesFilter,speciesFilter}) {

    const handleChange = (ev) => { 
        setSpeciesFilter(ev.target.value)
    }
  return <div> 
            <select name="" id="" onChange={handleChange} value={speciesFilter}>
                 <option value="">Seleccione</option>
                 <option value="Humanoid">Humano</option>
                 <option value="Alien">Alien</option>
            </select>
    
          </div>;
}

export default FilterBySpecies;

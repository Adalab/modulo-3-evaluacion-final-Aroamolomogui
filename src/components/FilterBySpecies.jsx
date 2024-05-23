

function FilterBySpecies() {

}
return <>

  <form onSubmit={(ev)=> {ev.preventDefault()}}>
    <div>
        <label htmlFor="species">Selecciona la especie</label>
        <select name="species" id="species">
             <option value="Human">Human</option>
             <option value="Humanoid">Humanoid</option>
             <option value="Mythological Creature">Mythological Creature</option>
             <option value="Alien">Alien</option>

    </select>
    </div>

    </form>
    </>;
}git pu

export default FilterBySpecies;

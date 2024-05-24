
const getCharacteres = () => {
    return fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then((response) => response.json())
    //estoy sacando lo que tiene en results mi api qu es lo que me interesa//
    .then((data) => {
    const newArray = data.results.map((character)=>{
        return{
            id:character.id,
            name:character.name,
            image:character.image,
            species:character.species,
            status:character.status,
            origin:character.origin.name,
            episode:character.episode.length


        }
    })
    return newArray;
}  ) 
    } 


export {getCharacteres}

const getCharacteres = () => {
    return fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then(response => response.json())
    //estoy sacando lo que tiene en results mi api qu es lo que me interesa//
    .then(data => data.results)
    
       
    }  

export {getCharacteres}

const getCharacteres = () => {
    return fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then(response => response.json())
    .then(data => data.results)
       
    }  

export {getCharacteres}

import { Link } from "react-router-dom"
function Card({character}) {
  return (
    <article>
      <Link to={`/detail/${character.id}`}>
        <img src= {character.image} alt="" />
        <h3>{character.name}</h3>
        <p>{character.species}</p>
       </Link>
      
    </article>
  )
}

export default Card
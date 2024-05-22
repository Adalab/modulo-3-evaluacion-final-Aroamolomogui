

function Card({character}) {
  return (
    <article>
        <img src= {character.image} alt="" />
        <h3>{character.name}</h3>
        <p>{character.species}</p>
    </article>
  )
}

export default Card
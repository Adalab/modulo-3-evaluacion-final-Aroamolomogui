
import Card from "./Card";

function CardList({characteres}) {
  return (
    <ul>
      {characteres?.map((character) => <li key={character.id}> < Card character={character}/> </li>)}  
    </ul>

)
}
export default CardList
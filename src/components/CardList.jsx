
import Card from "./Card";

function CardList  ({characteres}) {
  return (
    <ul className="cardList">
      {characteres?.map((character) => <li key={character.id}> < Card character={character}/> </li>)}  
    </ul>

)
}
export default CardList
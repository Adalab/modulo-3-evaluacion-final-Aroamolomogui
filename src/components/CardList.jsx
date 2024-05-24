
import Card from "./Card";

function CardList  ({characteres}) {
  return (
    <ul className="cardList">
      {characteres?.map((character) => (< Card character={character} key={character.id}/>))}  
    </ul>

)
}
export default CardList
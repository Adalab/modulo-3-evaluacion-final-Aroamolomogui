
import Card from "./Card";

function CardList  ({characteres}) {
  return (
    <ul className="cardList">
      {characteres.map((character,i) => (<Card character={character} key={i}/>))}  
    </ul>

)
}
export default CardList
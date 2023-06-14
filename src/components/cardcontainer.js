import { Card } from "./card"
import { cardData } from "./carddata"



export const CardContainer = () => {
  let cards = cardData.slice();


  // Fisher-Yates shuffle algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  const handleOnClick = (e) => {
    console.log("OII")
  }

  return (
    <div className="card-container">
      {cards.map(card => {
        return (
          <Card
            name={card.name}
            url={card.url}
            alt={card.alt}
            key={card.id}
            onClick={handleOnClick}
          />
        )
      })}
    </div>
  );
}
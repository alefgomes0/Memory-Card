import { Card } from "./card"
import { cardData } from "./carddata"



export function CardContainer() {
  const cards = cardData;
  const totalCards = cards.length;

  return (
    <div className="card-container">
      {cards.map(card => {
        return (
          <Card
            name={card.name}
            url={card.url}
            alt={card.alt}
          />
        )
      })}
    </div>
  );
}
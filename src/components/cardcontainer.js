import { Card } from "./card"
import { cardData } from "./carddata"
import { useState } from "react"


export function CardContainer() {
  const [cards, setCards] = useState(cardData);
  const totalCards = cards.length;

  return (
    <div className="card-container">
      {cards.map(card => {
        <Card
          name={card.name}
          url={card.url}
          alt={card.alt}
        />
      })}
    </div>
  );
}
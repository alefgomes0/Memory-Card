import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Scores } from "./components/scores";
import { CardContainer } from "./components/cardcontainer";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  const saveCardId = (clickedCardId) => {
    setSelectedIds(selectedIds.concat(clickedCardId));
  };

  useEffect(() => {
    handleScoreUpdate();
  }, [selectedIds]);

  const handleScoreUpdate = () => {
    const noDuplicates = selectedIds.length === new Set(selectedIds).size;

    if (noDuplicates) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
      setSelectedIds([]);
    }
  }


  return (
    <div className="page-wrapper">
      <Header>
        <Scores bestScore={bestScore} currentScore={currentScore} />
      </Header>
      <CardContainer saveId={saveCardId} />
    </div>
  );
}

export default App;
